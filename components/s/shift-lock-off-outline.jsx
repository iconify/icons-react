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
		"content": `<style>.qyyfb_oki {
  fill: currentColor;
  d: path("M5 20v-1h14v1zm4-3.384v-3.847H5.115l3.289-4.371l.733.733l-1.912 2.638H10v3.846h4v-1.62l1 1v1.62zm6.562-3.847l-1-1h2.213L12 5.246l-1.684 2.277l-.733-.732L12 3.577l6.885 9.192zm5.547 9.762L1.886 3.308l.714-.714l19.223 19.223zM10.952 12.373");
}
</style><path class="qyyfb_oki"/>`,
		"fallback": "material-symbols-light:shift-lock-off-outline",
	});
}

export default Component;
