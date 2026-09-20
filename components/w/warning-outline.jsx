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
		"content": `<style>.czgqpnbwv {
  fill: currentColor;
  d: path("M1 21L12 2l11 19zm3.45-2h15.1L12 6zm8.263-1.287Q13 17.425 13 17t-.288-.712T12 16t-.712.288T11 17t.288.713T12 18t.713-.288M11 15h2v-5h-2zm1-2.5");
}
</style><path class="czgqpnbwv"/>`,
		"fallback": "material-symbols:warning-outline",
	});
}

export default Component;
