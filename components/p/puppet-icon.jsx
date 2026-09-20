import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":395};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ublzfsbbn {
  fill: var(--svg-color--ffae1a, #ffae1a);
  d: path("M256 256V138.204h-90.155l-48.049-48.307V0H0v117.796h90.155l48.307 48.307v62.256l-48.307 48.307H0v117.796h117.796v-89.897l48.307-48.307H256zM39.265 39.265h39.266v39.266H39.265zm39.266 315.673H39.265v-39.265h39.266z");
}
</style><path class="ublzfsbbn"/>`,
		"fallback": "logos:puppet-icon",
	});
}

export default Component;
