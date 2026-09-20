import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vwaoxftwf {
  fill: currentColor;
  d: path("M27.317 18.846c2.242-1.235 2.242-4.457 0-5.693L7.82 2.403C5.653 1.21 3 2.777 3 5.25v21.492c0 2.473 2.652 4.04 4.818 2.846z");
}
</style><path class="vwaoxftwf"/>`,
		"fallback": "fluent:triangle-right-32-filled",
	});
}

export default Component;
