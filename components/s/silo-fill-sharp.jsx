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
		"content": `<style>.j2bpxpm-h {
  fill: currentColor;
  d: path("M13 9.618V12H3V8a5 5 0 0 1 9.96-.638l7.487 3.744A1 1 0 0 1 21 12v8a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2v-2h10v2h6v-7.382ZM13 14v2H3v-2Z");
}
</style><path class="j2bpxpm-h"/>`,
		"fallback": "coolicons:silo-fill-sharp",
	});
}

export default Component;
