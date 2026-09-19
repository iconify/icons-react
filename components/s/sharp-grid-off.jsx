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
		"content": `<style>.a5i-bvbfo {
  fill: currentColor;
  d: path("M8 4v.89l2 2V4h4v4h-2.89l2 2H14v.89l2 2V10h4v4h-2.89l2 2H20v.89l2 2V2H5.11l2 2zm8 0h4v4h-4zM1.41 1.14L0 2.55l2 2V22h17.45l2.01 2.01l1.41-1.41zM10 12.55L11.45 14H10zm-6-6L5.45 8H4zM8 20H4v-4h4zm0-6H4v-4h3.45l.55.55zm6 6h-4v-4h3.45l.55.55zm2 0v-1.45L17.45 20z");
}
</style><path class="a5i-bvbfo"/>`,
		"fallback": "ic:sharp-grid-off",
	});
}

export default Component;
