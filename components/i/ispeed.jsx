import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gsdiqtb9u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 29.469v8.382m7.4-14.392v10.114m7.4-16.426v22.47m7.4-31.235v22.285m7.4-11.788v17.67m7.4-23.366v17.391");
}
</style><path class="gsdiqtb9u"/>`,
		"fallback": "arcticons:ispeed",
	});
}

export default Component;
