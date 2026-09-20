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
		"content": `<style>.xoeeifl5q {
  fill: currentColor;
  d: path("m251.66 190.38l-64-144A4 4 0 0 0 184 44H72a4 4 0 0 0-3.63 2.35v.06l-64 143.93A4 4 0 0 0 8 196h240a4 4 0 0 0 3.66-5.62M68 66.85V188H14.16ZM76 188V66.85L129.84 188Zm62.6 0L78.16 52H181.4l60.44 136Z");
}
</style><path class="xoeeifl5q"/>`,
		"fallback": "ph:tent-thin",
	});
}

export default Component;
