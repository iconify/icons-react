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
		"content": `<style>.dmg8wjgbn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 20.894v-2.682m5.86 5.11l1.896-1.897m.531 7.756h2.682m-5.109 5.86l1.896 1.897m-7.756.53v2.682m-5.86-5.109l-1.896 1.897m-.531-7.757h-2.682m5.109-5.859l-1.896-1.897M24 14.863v1.328");
}

.dowyqmbnu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.619 18.366V13.88a9.381 9.381 0 0 1 18.762 0v4.371");
}

.i54t5ebnc {
  cx: 24px;
  cy: 29.181px;
  r: 14.319px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.re7tec-gm {
  cx: 24px;
  cy: 29.181px;
  r: 4.938px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="i54t5ebnc"/><path class="dowyqmbnu"/><circle class="re7tec-gm"/><path class="dmg8wjgbn"/>`,
		"fallback": "arcticons:keysmith",
	});
}

export default Component;
