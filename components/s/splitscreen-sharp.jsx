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
		"content": `<style>.spwbbdbvh {
  fill: currentColor;
  d: path("M3 11V3h18v8zm0 10v-8h18v8z");
}
</style><path class="spwbbdbvh"/>`,
		"fallback": "material-symbols:splitscreen-sharp",
	});
}

export default Component;
