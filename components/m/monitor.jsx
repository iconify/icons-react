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
		"content": `<style>.p-_md438e {
  fill: currentColor;
  d: path("M7.192 20v-1.538l.77-.77H4.616q-.691 0-1.153-.462T3 16.077V5.616q0-.691.463-1.153T4.615 4h14.77q.69 0 1.152.463T21 5.616v10.461q0 .69-.463 1.153t-1.153.462h-3.346l.77.77V20z");
}
</style><path class="p-_md438e"/>`,
		"fallback": "material-symbols-light:monitor",
	});
}

export default Component;
