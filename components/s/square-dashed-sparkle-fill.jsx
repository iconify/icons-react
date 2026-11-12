import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.r4uti_guq {
  fill: currentColor;
  d: path("M4 4v3a1 1 0 0 1-2 0V4a2 2 0 0 1 2-2h3a1 1 0 0 1 0 2Zm9-2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2Zm7 0a2 2 0 0 1 2 2v3a1 1 0 0 1-2 0V4h-3a1 1 0 0 1 0-2Zm-9 6a1 1 0 0 1 2 0c0 1.452 1.548 3 3 3a1 1 0 0 1 0 2c-.774 0-1.508.422-2.043.957a3.5 3.5 0 0 0-.707.997c-.153.328-.25.683-.25 1.046a1 1 0 0 1-2 0c0-.363-.097-.718-.25-1.046a3.5 3.5 0 0 0-.707-.997a3.5 3.5 0 0 0-.997-.707A2.5 2.5 0 0 0 8 13a1 1 0 0 1 0-2c1.452 0 3-1.548 3-3m-7 5a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0Zm16 0v-2a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0M4 20h3a1 1 0 0 1 0 2H4a2 2 0 0 1-2-2v-3a1 1 0 0 1 2 0Zm16 0v-3a1 1 0 0 1 2 0v3a2 2 0 0 1-2 2h-3a1 1 0 0 1 0-2Zm-7 2h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2");
}
</style><path class="r4uti_guq"/>`,
		"fallback": "coolicons:square-dashed-sparkle-fill",
	});
}

export default Component;
