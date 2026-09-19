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
		"content": `<style>.arohq-6hv {
  fill: currentColor;
  d: path("m17 7l-5-4l-5 7l-4-3v13h18V7zm2 9.95l-7-5.45L8 17l-3-2.4V11l2.44 1.83l4.96-6.95L16.3 9H19z");
}

.lwvi_i-la {
  fill: currentColor;
  d: path("m19 16.95l-7-5.45L8 17l-3-2.4V11l2.44 1.83l4.96-6.95L16.3 9H19z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="lwvi_i-la"/><path class="arohq-6hv"/>`,
		"fallback": "ic:twotone-area-chart",
	});
}

export default Component;
