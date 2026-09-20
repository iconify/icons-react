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
		"content": `<style>.vqywxybaf {
  fill: currentColor;
  d: path("M13 19L2 12l11-7v6h9v2h-9z");
}
</style><path class="vqywxybaf"/>`,
		"fallback": "material-symbols:line-start-arrow-sharp",
	});
}

export default Component;
