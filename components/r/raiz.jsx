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
		"content": `<style>.fqeoerb0a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.935 16.281h24.773v24.784");
}

.ju7d3eg9i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.103 12.113h24.773v24.784");
}

.p6okz8yaq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.065 31.708V6.935H16.281l-4.404 4.405l-4.942 4.941l6.156 6.156h12.461v12.472l6.156 6.156l5.081-5.081z");
}
</style><path class="fqeoerb0a"/><path class="ju7d3eg9i"/><path class="p6okz8yaq"/>`,
		"fallback": "arcticons:raiz",
	});
}

export default Component;
