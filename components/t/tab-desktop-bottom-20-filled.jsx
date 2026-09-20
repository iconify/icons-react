import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hpkalz_4a {
  fill: currentColor;
  d: path("M14.503 17a2.5 2.5 0 0 0 2.5-2.5v-9a2.5 2.5 0 0 0-2.5-2.5h-9a2.5 2.5 0 0 0-2.5 2.5V13h7.5a1.5 1.5 0 0 1 1.5 1.5V17zm-3.5 0v-2.5a.5.5 0 0 0-.5-.5h-7.5v.5a2.5 2.5 0 0 0 2.5 2.5z");
}
</style><path class="hpkalz_4a"/>`,
		"fallback": "fluent:tab-desktop-bottom-20-filled",
	});
}

export default Component;
