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
		"content": `<style>.ccegb62zo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.318 7.77c6.53-3.577 12.916-2.85 14.427 1.641c2.688 7.985-4.71 25.292-16.155 33.089c6.256-12.095 6.256-19.439 6.256-24.536s-1.332-7.17-4.528-10.194");
}

.nw5rnabgr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.075 10.71c5.81-3.182 10.693-1.642 12.037 2.353c2.392 7.104-9.983 21.92-23.903 25.588");
}
</style><path class="ccegb62zo"/><path class="nw5rnabgr"/>`,
		"fallback": "arcticons:rimi",
	});
}

export default Component;
