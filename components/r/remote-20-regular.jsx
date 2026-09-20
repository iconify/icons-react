import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.blcbhlbpj {
  fill: currentColor;
  d: path("M17.146 14.854a.5.5 0 0 0 .708-.708L12.207 8.5l5.647-5.646a.5.5 0 0 0-.708-.708l-6 6a.5.5 0 0 0 0 .708zM2.854 5.146a.5.5 0 1 0-.708.708L7.793 11.5l-5.647 5.646a.5.5 0 0 0 .708.708l6-6a.5.5 0 0 0 0-.708z");
}
</style><path class="blcbhlbpj"/>`,
		"fallback": "fluent:remote-20-regular",
	});
}

export default Component;
