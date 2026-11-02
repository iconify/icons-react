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
		"content": `<style>.c5w82abfj {
  d: path("M8.707 9.293C9.02 9.605 9.532 10 10 10h4c.468 0 .98-.395 1.293-.707l4-4a.999.999 0 1 1 1.414 1.414l-4 4C15.992 11.422 15.039 12 14 12h-4c-1.039 0-1.992-.578-2.707-1.293l-4-4a.999.999 0 1 1 1.414-1.414Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.lhrhq1bxr {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M19 20H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3");
}
</style><g class="cuyn6tgcc"><path class="lhrhq1bxr"/><path class="c5w82abfj"/></g>`,
		"fallback": "coolicons:mail-bulk",
	});
}

export default Component;
