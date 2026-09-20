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
		"content": `<style>.lhjdlornh {
  fill: currentColor;
  d: path("M5.5 13.525L2 5l6-3l2 3h6.025L23 12l-1.925 1.925L12.75 9.2L10 9l-.1 1.5l2.325.175l3.25 1.825l-.975 2zm-2.25 7.45L2.7 19.05l4.75-1.25q1.8-.475 3.825-.888t3.7-.412q1.875 0 3.488.75t3.187 2.025L20.3 20.75q-1.275-1.075-2.637-1.662t-2.688-.588q-1.6 0-3.525.413t-3.475.812z");
}
</style><path class="lhjdlornh"/>`,
		"fallback": "material-symbols:massage-sharp",
	});
}

export default Component;
