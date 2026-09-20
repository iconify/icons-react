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
		"content": `<style>.isvm1dbxx {
  fill: currentColor;
  d: path("M2 22V6h6V2h8v4h6v16zm8-16h4V4h-4zm1 9v3h2v-3h3v-2h-3v-3h-2v3H8v2z");
}
</style><path class="isvm1dbxx"/>`,
		"fallback": "material-symbols:medical-services-sharp",
	});
}

export default Component;
