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
		"content": `<style>.e57y8gv0r {
  fill: currentColor;
  d: path("M5 16h10V8H5zm2-5h2V9h2v2h2v2h-2v2H9v-2H7z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.f8_4f1abo {
  fill: currentColor;
  d: path("M17 7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zm-2 9H5V8h10zm-6-1h2v-2h2v-2h-2V9H9v2H7v2h2z");
}
</style><path class="e57y8gv0r"/><path class="f8_4f1abo"/>`,
		"fallback": "ic:twotone-video-call",
	});
}

export default Component;
