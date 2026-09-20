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
		"content": `<style>.ak8laogjk {
  fill: currentColor;
  d: path("M3 19V5h18v14z");
}
</style><path class="ak8laogjk"/>`,
		"fallback": "material-symbols-light:rectangle-sharp",
	});
}

export default Component;
