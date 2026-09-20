import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.te5dgzbgn {
  fill: currentColor;
  d: path("M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m0-160a72 72 0 1 0 72 72a72.08 72.08 0 0 0-72-72m0 128a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56");
}
</style><path class="te5dgzbgn"/>`,
		"fallback": "ph:record",
	});
}

export default Component;
