import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.n06sbgbub {
  fill: currentColor;
  d: path("M9.808 15.5h1v-7h-1zm3.384 0h1v-7h-1zM4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19z");
}
</style><path class="n06sbgbub"/>`,
		"fallback": "material-symbols-light:pause-presentation",
	});
}

export default Component;
