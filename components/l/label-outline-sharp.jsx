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
		"content": `<style>.dopk0kiyj {
  fill: currentColor;
  d: path("M3 19V5h12.635L21 12l-5.365 7zm1-1h11.135l4.615-6l-4.615-6H4zm7.885-6");
}
</style><path class="dopk0kiyj"/>`,
		"fallback": "material-symbols-light:label-outline-sharp",
	});
}

export default Component;
