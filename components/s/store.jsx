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
		"content": `<style>.tmhs_lvwq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm2 4v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9m-9 12v-4a2 2 0 1 1 4 0v4M9 3v6m6-6v6");
}
</style><path class="tmhs_lvwq"/>`,
		"fallback": "coolicons:store",
	});
}

export default Component;
