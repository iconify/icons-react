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
		"content": `<style>.d6iw6abyk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.487 22.382H41.5a2 2 0 0 1 2 2v11.766a2 2 0 0 1-2 2H23.06a2 2 0 0 1-2-2v-1.013");
}

.j0hbj-sbj {
  width: 35.987px;
  height: 25.284px;
  x: 4.5px;
  y: 9.851px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
  ry: 2px;
}
</style><rect class="j0hbj-sbj"/><path class="d6iw6abyk"/>`,
		"fallback": "arcticons:remote-desktop-manager",
	});
}

export default Component;
