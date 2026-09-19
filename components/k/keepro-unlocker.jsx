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
		"content": `<style>.ghi1abb9e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.815 17.584a3.5 3.5 0 1 0-7 0c0 1.491.936 2.756 2.25 3.26v2.402a1.25 1.25 0 0 0 2.5 0v-2.402a3.49 3.49 0 0 0 2.25-3.26");
}

.nvpi1_bdz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43 17.077c0-5.654-4.584-10.238-10.238-10.238c-3.722 0-6.97 1.993-8.762 4.964c-1.792-2.97-5.04-4.964-8.763-4.964C9.583 6.84 5 11.423 5 17.077c0 1.292.25 2.524.687 3.662C9.072 30.476 24 41.161 24 41.161s14.928-10.685 18.313-20.422A10.2 10.2 0 0 0 43 17.077");
}
</style><path class="nvpi1_bdz"/><path class="ghi1abb9e"/>`,
		"fallback": "arcticons:keepro-unlocker",
	});
}

export default Component;
