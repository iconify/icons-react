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
		"content": `<style>.nosd0q6yy {
  fill: currentColor;
  d: path("M22 13h-7c-1.1 0-2 .9-2 2v7H4.41c-.89 0-1.34-1.08-.71-1.71L20.29 3.71c.63-.63 1.71-.19 1.71.7zm-1.7 1.71a.996.996 0 0 0-1.41 0L17.5 16.1l-1.39-1.39a.996.996 0 1 0-1.41 1.41l1.39 1.39l-1.39 1.39a.996.996 0 1 0 1.41 1.41l1.39-1.38l1.39 1.38a.996.996 0 1 0 1.41-1.41l-1.38-1.39l1.38-1.39a.996.996 0 0 0 0-1.41");
}
</style><path class="nosd0q6yy"/>`,
		"fallback": "ic:round-signal-cellular-nodata",
	});
}

export default Component;
