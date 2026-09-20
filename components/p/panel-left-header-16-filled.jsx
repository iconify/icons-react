import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lgostvxel {
  fill: currentColor;
  d: path("M2 5.5A2.5 2.5 0 0 1 4.5 3h7A2.5 2.5 0 0 1 14 5.5v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 10.5zm11 1v-1A1.5 1.5 0 0 0 11.5 4H7v2.5zm-6 1V12h4.5a1.5 1.5 0 0 0 1.5-1.5v-3z");
}
</style><path class="lgostvxel"/>`,
		"fallback": "fluent:panel-left-header-16-filled",
	});
}

export default Component;
