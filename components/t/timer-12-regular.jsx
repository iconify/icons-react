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
		"content": `<style>.tq3decctb {
  fill: currentColor;
  d: path("M3 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 3 .5m2 7a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-1 0zM5.5 2a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9M2 6.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0m8.148-2.647a.5.5 0 1 0 .706-.708l-1.002-.998a.5.5 0 1 0-.706.708z");
}
</style><path class="tq3decctb"/>`,
		"fallback": "fluent:timer-12-regular",
	});
}

export default Component;
