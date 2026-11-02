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
		"content": `<style>.u23dut4-f {
  fill: currentColor;
  d: path("M21 3a1 1 0 0 1 0 2h-5v3.099A5.01 5.01 0 0 1 20 13v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-5a5.01 5.01 0 0 1 4-4.901V5H3a1 1 0 0 1 0-2Zm-7 2h-4v3h4Zm-8 8h12a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3m3.01 3H9a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M15 16a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Z");
}
</style><path class="u23dut4-f"/>`,
		"fallback": "coolicons:suspension-railway-front-fill-round",
	});
}

export default Component;
