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
		"content": `<style>.gmyft4pud {
  fill: currentColor;
  d: path("M8 19V5l11 7z");
}
</style><path class="gmyft4pud"/>`,
		"fallback": "material-symbols:play-arrow",
	});
}

export default Component;
