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
		"content": `<style>.xijvqibal {
  fill: currentColor;
  d: path("M21 21H3v-4.65h18zm0-6.65H3V9.625h18zm0-6.725H3V3h18z");
}
</style><path class="xijvqibal"/>`,
		"fallback": "material-symbols:table-rows",
	});
}

export default Component;
