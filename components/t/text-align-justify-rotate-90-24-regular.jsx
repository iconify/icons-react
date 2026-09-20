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
		"content": `<style>.pn47gybec {
  fill: currentColor;
  d: path("M18.25 2a.75.75 0 0 1 .75.75v18.5a.75.75 0 0 1-1.5 0V2.75a.75.75 0 0 1 .75-.75m-13 0a.75.75 0 0 1 .75.75v18.5a.75.75 0 0 1-1.5 0V2.75A.75.75 0 0 1 5.25 2m7.25.75a.75.75 0 0 0-1.5 0v18.5a.75.75 0 0 0 1.5 0z");
}
</style><path class="pn47gybec"/>`,
		"fallback": "fluent:text-align-justify-rotate-90-24-regular",
	});
}

export default Component;
