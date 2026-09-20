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
		"content": `<style>.u5w0yzl3d {
  fill: currentColor;
  d: path("M128 80a48 48 0 1 0 48 48a48.06 48.06 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32m95.68-93.85l-88-48.15a15.88 15.88 0 0 0-15.36 0l-88 48.17a16 16 0 0 0-8.32 14v95.64a16 16 0 0 0 8.32 14l88 48.17a15.88 15.88 0 0 0 15.36 0l88-48.17a16 16 0 0 0 8.32-14V80.18a16 16 0 0 0-8.32-14.03M128 224l-88-48.18V80.18L128 32l88 48.17v95.64Z");
}
</style><path class="u5w0yzl3d"/>`,
		"fallback": "ph:nut",
	});
}

export default Component;
