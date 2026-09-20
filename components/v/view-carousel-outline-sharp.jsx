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
		"content": `<style>.v6twkgk3g {
  fill: currentColor;
  d: path("M2 17V7h4v10zm5 2V5h10v14zm11-2V7h4v10zm-9 0h6V7H9zm3-5");
}
</style><path class="v6twkgk3g"/>`,
		"fallback": "material-symbols:view-carousel-outline-sharp",
	});
}

export default Component;
