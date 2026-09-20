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
		"content": `<style>.sex9bkb6j {
  fill: currentColor;
  d: path("M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16M112 168H80a40 40 0 0 1 0-80h32a8 8 0 0 1 0 16H80a24 24 0 0 0 0 48h32a8 8 0 0 1 0 16m48-48a8 8 0 0 1 0 16H96a8 8 0 0 1 0-16Zm16 48h-32a8 8 0 0 1 0-16h32a24 24 0 0 0 0-48h-32a8 8 0 0 1 0-16h32a40 40 0 0 1 0 80");
}
</style><path class="sex9bkb6j"/>`,
		"fallback": "ph:link-simple-horizontal-fill",
	});
}

export default Component;
