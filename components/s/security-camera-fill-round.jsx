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
		"content": `<style>.rzole-bef {
  fill: currentColor;
  d: path("M3.048 10.363a4 4 0 0 1 2.828-4.899l9.66-2.588a4 4 0 0 1 4.899 2.829l.517 1.932a4 4 0 0 1-2.828 4.899L13 13.908V16h5a1 1 0 0 1 2 0v5a1 1 0 0 1-2 0v-3h-6a1 1 0 0 1-1-1v-2.556l-2.536.68a4 4 0 0 1-4.899-2.829ZM16.571 6.74a1 1 0 0 0-1.226-.706a1 1 0 0 0-.706 1.224l.518 1.931a1 1 0 1 0 1.931-.517Zm-5.163 7.595l.702-.188c-.25-.027-.5.04-.702.188");
}
</style><path class="rzole-bef"/>`,
		"fallback": "coolicons:security-camera-fill-round",
	});
}

export default Component;
