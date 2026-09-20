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
		"content": `<style>.vajnfh60a {
  fill: currentColor;
  d: path("M6.027 18.77L2.269 12l3.808-6.77h3.385L5.654 12l2.215 3.92l6.57-10.69h3.484L21.731 12l-3.808 6.77h-3.384L18.345 12L16.13 8.092L9.573 18.77z");
}
</style><path class="vajnfh60a"/>`,
		"fallback": "material-symbols-light:polymer-sharp",
	});
}

export default Component;
