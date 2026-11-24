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
		"content": `<style>.av8lpmy0g {
  d: path("M4 7h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2m5 7h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2");
}

.cuyn6tgcc {
  fill: currentColor;
}

.jxmcx00gl {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m3.106 7.553l2-4A1 1 0 0 1 6 3h12c.379 0 .725.214.894.553l2 4c.07.139.106.292.106.447v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8c0-.155.036-.308.106-.447");
}
</style><g class="cuyn6tgcc"><path class="jxmcx00gl"/><path class="av8lpmy0g"/></g>`,
		"fallback": "coolicons:package-minus-bulk-sharp",
	});
}

export default Component;
