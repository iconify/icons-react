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
		"content": `<style>.cdy707mft {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4 2h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1");
}

.cuyn6tgcc {
  fill: currentColor;
}

.eskjdpd-q {
  d: path("M7 11V7a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v4a1 1 0 0 1-.2.6a6 6 0 0 1-9.6 0A1 1 0 0 1 7 11m8-.354V8H9v2.646a4 4 0 0 0 6 0M9 16h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="cdy707mft"/><path class="eskjdpd-q"/></g>`,
		"fallback": "coolicons:inverter-bulk-sharp",
	});
}

export default Component;
