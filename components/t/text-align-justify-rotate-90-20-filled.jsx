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
		"content": `<style>.h57b8lb2b {
  fill: currentColor;
  d: path("M15.75 2a.75.75 0 0 1 .75.75v14.5a.75.75 0 0 1-1.5 0V2.75a.75.75 0 0 1 .75-.75m-5 0a.75.75 0 0 1 .75.75v14.5a.75.75 0 0 1-1.5 0V2.75a.75.75 0 0 1 .75-.75m-4.25.75a.75.75 0 0 0-1.5 0v14.5a.75.75 0 0 0 1.5 0z");
}
</style><path class="h57b8lb2b"/>`,
		"fallback": "fluent:text-align-justify-rotate-90-20-filled",
	});
}

export default Component;
