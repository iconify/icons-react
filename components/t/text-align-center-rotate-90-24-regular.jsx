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
		"content": `<style>.v_jyibsjq {
  fill: currentColor;
  d: path("M18.25 4a.75.75 0 0 1 .75.75v14.5a.75.75 0 0 1-1.5 0V4.75a.75.75 0 0 1 .75-.75m-13 2a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 5.25 6m7.25-3.25a.75.75 0 0 0-1.5 0v18.5a.75.75 0 0 0 1.5 0z");
}
</style><path class="v_jyibsjq"/>`,
		"fallback": "fluent:text-align-center-rotate-90-24-regular",
	});
}

export default Component;
