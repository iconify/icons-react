import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ej3ebwj-x {
  fill: currentColor;
  d: path("M5.25 2.75a.75.75 0 0 0-1.5 0v11.5a.75.75 0 0 0 1.5 0V2.75ZM4.5 18a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm5.5 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm6.5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0ZM10 2a.75.75 0 0 1 .75.75v11.5a.75.75 0 0 1-1.5 0V2.75A.75.75 0 0 1 10 2Zm6.25.75a.75.75 0 0 0-1.5 0v11.5a.75.75 0 0 0 1.5 0V2.75Z");
}
</style><path class="ej3ebwj-x"/>`,
		"fallback": "fluent:text-bullet-list-rotate-270-20-filled",
	});
}

export default Component;
