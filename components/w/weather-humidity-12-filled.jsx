import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tgj_j0q5x {
  fill: currentColor;
  d: path("M7.5 10a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm1.25-2a.5.5 0 0 1 0 1h-5.5a.5.5 0 0 1 0-1zM9 6a.5.5 0 0 1 0 1H3a.5.5 0 0 1 0-1zM5.999 1a.5.5 0 0 1 .354.146v.001c.256.256 1.032 1.032 1.746 2.07c.359.522.714 1.129.977 1.783H2.922a9.4 9.4 0 0 1 .977-1.783a15 15 0 0 1 1.746-2.07A.5.5 0 0 1 6 1");
}
</style><path class="tgj_j0q5x"/>`,
		"fallback": "fluent:weather-humidity-12-filled",
	});
}

export default Component;
