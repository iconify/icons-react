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
		"content": `<style>.lgsuzl05l {
  fill: currentColor;
  d: path("M2 17V7h20v10h-3v-2h1V9H4v6h6v2H2Zm12.5 2l-1.1-2.4l-2.4-1.1l2.4-1.1l1.1-2.4l1.1 2.4l2.4 1.1l-2.4 1.1l-1.1 2.4Zm2.5-5l-.625-1.375L15 12l1.375-.625L17 10l.625 1.375L19 12l-1.375.625L17 14Z");
}
</style><path class="lgsuzl05l"/>`,
		"fallback": "material-symbols:smart-button-sharp",
	});
}

export default Component;
