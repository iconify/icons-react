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
		"content": `<style>.kb9fm5qho {
  fill: currentColor;
  d: path("M4.75 4A2.75 2.75 0 0 0 2 6.75v6.5A2.75 2.75 0 0 0 4.75 16h10.5A2.75 2.75 0 0 0 18 13.25v-6.5A2.75 2.75 0 0 0 15.25 4zM7 7.5v5a.5.5 0 0 1-1 0V8.309l-.276.138a.5.5 0 1 1-.447-.894l1-.5A.5.5 0 0 1 7 7.5m7 0v5a.5.5 0 1 1-1 0V8.309l-.276.138a.5.5 0 1 1-.447-.894l1-.5A.5.5 0 0 1 14 7.5m-4 1a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M9.5 12a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1");
}
</style><path class="kb9fm5qho"/>`,
		"fallback": "fluent:ratio-one-to-one-20-filled",
	});
}

export default Component;
