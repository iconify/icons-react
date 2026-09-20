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
		"content": `<style>.awkwkabws {
  fill: currentColor;
  d: path("M3.262 21.116h3.43v-3h1v3H11.5v-3h1v3h3.808v-3h1v3h3.43l-1.461-5H4.723zm-1.32 1l1.943-6.674V11.5h5.807V4.192q0-.961.674-1.634q.673-.673 1.634-.673t1.635.673t.673 1.634V11.5h5.807v3.942l1.923 6.674z");
}
</style><path class="awkwkabws"/>`,
		"fallback": "material-symbols-light:mop-sharp",
	});
}

export default Component;
