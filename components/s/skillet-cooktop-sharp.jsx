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
		"content": `<style>.ea5pzfbjg {
  fill: currentColor;
  d: path("M3 15V8h13V6.275l6.675-2.225l.625 1.9L18 7.725V15zm6 6v-3H2v-2h9v5zm4 0v-5h9v2h-7v3z");
}
</style><path class="ea5pzfbjg"/>`,
		"fallback": "material-symbols:skillet-cooktop-sharp",
	});
}

export default Component;
