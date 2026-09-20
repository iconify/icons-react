import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ohvilr6tr {
  fill: currentColor;
  d: path("M4.5 2a.5.5 0 0 1 .5.5v9.793l1.146-1.146a.5.5 0 0 1 .707.707l-2 2a.5.5 0 0 1-.707 0l-2-2a.5.5 0 0 1 .707-.707L4 12.293V2.5a.5.5 0 0 1 .5-.5m6 6a.5.5 0 0 1 .5.5v3.793l1.146-1.146a.5.5 0 0 1 .707.707l-2 2a.5.5 0 0 1-.707 0l-2-2a.5.5 0 0 1 .707-.707L10 12.293V8.5a.5.5 0 0 1 .5-.5M6.533 2.32a.5.5 0 0 1 .647-.287l6.5 2.5l.069.033a.5.5 0 0 1-.07.9l-6.5 2.5a.5.5 0 0 1-.359-.933L9 6.194v-2.39l-2.18-.837a.5.5 0 0 1-.287-.647M10 5.81L12.107 5L10 4.19z");
}
</style><path class="ohvilr6tr"/>`,
		"fallback": "fluent:text-direction-rotate-90-right-16-regular",
	});
}

export default Component;
