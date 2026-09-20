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
		"content": `<style>.vhway88vd {
  fill: currentColor;
  d: path("M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M72 128a8 8 0 0 1-16 0a72.08 72.08 0 0 1 72-72a8 8 0 0 1 0 16a56.06 56.06 0 0 0-56 56m32 0a24 24 0 1 1 24 24a24 24 0 0 1-24-24m24 72a8 8 0 0 1 0-16a56.06 56.06 0 0 0 56-56a8 8 0 0 1 16 0a72.08 72.08 0 0 1-72 72");
}
</style><path class="vhway88vd"/>`,
		"fallback": "ph:vinyl-record-fill",
	});
}

export default Component;
