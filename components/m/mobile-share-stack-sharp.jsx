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
		"content": `<style>.wkuw__ooq {
  fill: currentColor;
  d: path("M4 23V5h2v16h10v2zm4-4V1h12v4.05h1v3.9h-1V19zm3-7h1.5v-1.75h1.65l-.7.7L14.5 12L17 9.5L14.5 7l-1.05 1.05l.7.7H11z");
}
</style><path class="wkuw__ooq"/>`,
		"fallback": "material-symbols:mobile-share-stack-sharp",
	});
}

export default Component;
