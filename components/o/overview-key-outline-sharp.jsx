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
		"content": `<style>.edw4rna9l {
  fill: currentColor;
  d: path("M1 19V5h14v14zm2-2h10V7H3zm14 2V5h2v14zm4 0V5h2v14zM3 17V7z");
}
</style><path class="edw4rna9l"/>`,
		"fallback": "material-symbols:overview-key-outline-sharp",
	});
}

export default Component;
