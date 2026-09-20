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
		"content": `<style>.v5gdu_0rc {
  fill: currentColor;
  d: path("M6 18V2h16v16zm0 4v-2h2v2zM4 6H2V4h2zm6 16v-2h2v2zm4 0v-2h2v2zM2 22v-2h2v2zm0-4v-2h2v2zm0-4v-2h2v2zm0-4V8h2v2zm16 10h2v2h-2zM13 8h7V4h-7z");
}
</style><path class="v5gdu_0rc"/>`,
		"fallback": "material-symbols:tab-duplicate-sharp",
	});
}

export default Component;
