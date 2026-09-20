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
		"content": `<style>.n18gh5b6l {
  fill: currentColor;
  d: path("M1 19V5h14v14zm16 0V5h2v14zm4 0V5h2v14z");
}
</style><path class="n18gh5b6l"/>`,
		"fallback": "material-symbols:overview-key-sharp",
	});
}

export default Component;
