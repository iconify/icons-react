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
		"content": `<style>.da219mu4s {
  fill: currentColor;
  d: path("M3 19V5h5.325v14zm6.325 0V5h5.325v14zm6.325 0V5h5.325v14z");
}
</style><path class="da219mu4s"/>`,
		"fallback": "material-symbols:view-column-sharp",
	});
}

export default Component;
