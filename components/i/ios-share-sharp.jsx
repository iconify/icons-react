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
		"content": `<style>.sbo98ebvq {
  fill: currentColor;
  d: path("M5 21V9h3.73v1H6v10h12V10h-2.73V9H19v12zm6.5-5.5V4.614l-2.1 2.1L8.692 6L12 2.692L15.308 6l-.708.714l-2.1-2.1V15.5z");
}
</style><path class="sbo98ebvq"/>`,
		"fallback": "material-symbols-light:ios-share-sharp",
	});
}

export default Component;
