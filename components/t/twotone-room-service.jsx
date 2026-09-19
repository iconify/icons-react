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
		"content": `<style>.rqy8_oyby {
  fill: currentColor;
  d: path("M12 9.58c-2.95 0-5.47 1.83-6.5 4.41h13A7 7 0 0 0 12 9.58");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.xbxhvibrw {
  fill: currentColor;
  d: path("M2 17h20v2H2zm11.84-9.21A2.006 2.006 0 0 0 12 5a2.006 2.006 0 0 0-1.84 2.79C6.25 8.6 3.27 11.93 3 16h18c-.27-4.07-3.25-7.4-7.16-8.21M12 9.58c2.95 0 5.47 1.83 6.5 4.41h-13A7 7 0 0 1 12 9.58");
}
</style><path class="rqy8_oyby"/><path class="xbxhvibrw"/>`,
		"fallback": "ic:twotone-room-service",
	});
}

export default Component;
