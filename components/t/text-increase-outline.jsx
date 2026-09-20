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
		"content": `<style>.rp1-kibcn {
  fill: currentColor;
  d: path("M1 19L6.25 5h2.5L14 19h-2.4l-1.275-3.575h-5.65L3.4 19zm4.4-5.6h4.2L7.55 7.6h-.1zM18 16v-3h-3v-2h3V8h2v3h3v2h-3v3z");
}
</style><path class="rp1-kibcn"/>`,
		"fallback": "material-symbols:text-increase-outline",
	});
}

export default Component;
