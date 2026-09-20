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
		"content": `<style>.cd2prfbuv {
  fill: currentColor;
  d: path("M2 20V4h5.325v16zm7.35 0V4h5.325v16zm7.325 0V4H22v16z");
}
</style><path class="cd2prfbuv"/>`,
		"fallback": "material-symbols:view-week-sharp",
	});
}

export default Component;
