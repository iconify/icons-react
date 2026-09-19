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
		"content": `<style>.ib38i4bfs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.5 11V6.5a2 2 0 0 1 2-2h27a2 2 0 0 1 2 2v35a2 2 0 0 1-2 2h-18l-11-11V18");
}

.yr7n-hbnz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.84 14.5L12 7.5V11H5v7h7v3.5zm13.05 18.85h3v5h-3zm-12.29 0h3v5h-3zm6.15 0h3v5h-3zm-9.29 0v5l-4.97-4.97z");
}
</style><path class="ib38i4bfs"/><path class="yr7n-hbnz"/>`,
		"fallback": "arcticons:link2sd",
	});
}

export default Component;
