import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bxuwnrbxj {
  fill: currentColor;
  d: path("M2.004 7.75A3.75 3.75 0 0 1 5.754 4h16.497a3.75 3.75 0 0 1 3.75 3.75v12.5a3.75 3.75 0 0 1-3.75 3.75H5.754a3.75 3.75 0 0 1-3.75-3.75zm3.75-2.25a2.25 2.25 0 0 0-2.25 2.25v12.5a2.25 2.25 0 0 0 2.25 2.25h16.497a2.25 2.25 0 0 0 2.25-2.25V7.75a2.25 2.25 0 0 0-2.25-2.25z");
}
</style><path class="bxuwnrbxj"/>`,
		"fallback": "fluent:rectangle-landscape-28-regular",
	});
}

export default Component;
