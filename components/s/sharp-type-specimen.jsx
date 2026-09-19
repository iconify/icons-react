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
		"content": `<style>.k3c_um9jf {
  fill: currentColor;
  d: path("M22 2H6v16h16zm-5.37 12.5l-.8-2.3H12.2l-.82 2.3H9.81l3.38-9h1.61l3.38 9z");
}

.q5-9wfb5q {
  fill: currentColor;
  d: path("M4 6H2v16h16v-2H4z");
}

.r0hr0xiwf {
  fill: currentColor;
  d: path("m13.96 7.17l-1.31 3.72h2.69l-1.3-3.72z");
}
</style><path class="q5-9wfb5q"/><path class="k3c_um9jf"/><path class="r0hr0xiwf"/>`,
		"fallback": "ic:sharp-type-specimen",
	});
}

export default Component;
