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

.gjyil6b-u {
  d: path("M2 3a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2H4v3a1 1 0 0 1-2 0Zm19-1a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V4h-3a1 1 0 0 1 0-2Zm-9 9h.01a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2M3 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v3h3a1 1 0 0 1 0 2Zm19-1a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0Z");
}

.w3x7f__zv {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M7.779 7.78c2.704-1.708 5.738-1.708 8.442 0c1.466.926 2.654 2.23 3.611 3.665a1 1 0 0 1 0 1.11c-.957 1.435-2.145 2.739-3.611 3.665c-2.704 1.708-5.738 1.708-8.442 0c-1.466-.926-2.654-2.23-3.611-3.665a1 1 0 0 1 0-1.11c.957-1.435 2.145-2.739 3.611-3.665M6.221 12c3.442 4.664 8.116 4.664 11.558 0c-3.442-4.664-8.116-4.664-11.558 0m5.789-1a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="w3x7f__zv"/><path class="gjyil6b-u"/></g>`,
		"fallback": "coolicons:scan-eye-bulk-sharp",
	});
}

export default Component;
