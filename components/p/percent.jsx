import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.o_ym0kb4c {
  fill: currentColor;
  d: path("m205.66 61.64l-144 144a8 8 0 0 1-11.32-11.32l144-144a8 8 0 0 1 11.32 11.31Zm-155.12 39.8a36 36 0 0 1 50.92-50.91a36 36 0 0 1-50.92 50.91M56 76a20 20 0 1 0 34.14-14.16A20 20 0 0 0 56 76m160 104a36 36 0 1 1-10.54-25.46A35.76 35.76 0 0 1 216 180m-16 0a20 20 0 1 0-5.86 14.14A19.87 19.87 0 0 0 200 180");
}
</style><path class="o_ym0kb4c"/>`,
		"fallback": "ph:percent",
	});
}

export default Component;
