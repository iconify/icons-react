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
		"content": `<style>.ynr7aybob {
  fill: currentColor;
  d: path("M8.45 20.1L2.7 21.3l1.2-5.75zm1.625-1.225l-4.95-4.95l11.75-11.75l4.95 4.95z");
}
</style><path class="ynr7aybob"/>`,
		"fallback": "material-symbols:stylus-sharp",
	});
}

export default Component;
