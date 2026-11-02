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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.ofj_qvbmk {
  d: path("M11 15h-1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2H4v4h7a1 1 0 0 1 0 2m-5 0v5h2v-5Z");
}

.vdixwhbnm {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m10.553 7.106l10-5A1 1 0 0 1 22 3v16a1 1 0 0 1-1.447.894l-10-5A1 1 0 0 1 10 14V8c0-.379.214-.725.553-.894");
}
</style><g class="cuyn6tgcc"><path class="vdixwhbnm"/><path class="ofj_qvbmk"/></g>`,
		"fallback": "coolicons:megaphone-bulk-sharp",
	});
}

export default Component;
