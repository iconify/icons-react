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
		"content": `<style>.vxbmbjzjt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.492 27.954c13.204 0 13.865 15.186 31.694 14.525h2.632v-7.918l-1.31-.011c-17.83.66-18.49-14.525-31.694-14.525l-2.632.01v7.918l2.632.022c13.204 0 13.865-15.186 31.694-14.525l1.31-.011V5.51l-2.632.011c-17.829-.66-18.49 14.525-31.694 14.525");
}
</style><path class="vxbmbjzjt"/>`,
		"fallback": "arcticons:prs",
	});
}

export default Component;
