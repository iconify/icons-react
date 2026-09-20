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
		"content": `<style>.v2027bbow {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.917 21.16zc1.183 0 2.143.96 2.143 2.143v1.394a2.143 2.143 0 0 1-4.287 0v-1.394c0-1.183.96-2.143 2.144-2.143m-8.583-2.894v8.574m0-3.537a2.143 2.143 0 1 1 4.286 0v3.537m-11.95-.939c.526.685 1.185.94 2.102.94h1.27a2.14 2.14 0 0 0 2.138-2.14v-.009a2.14 2.14 0 0 0-2.139-2.138h-1.4a2.14 2.14 0 0 1-2.141-2.141c0-1.185.96-2.146 2.146-2.146h1.262c.917 0 1.577.255 2.102.94m15.203 5.49a2.143 2.143 0 1 0 4.287 0v-1.394a2.143 2.143 0 1 0-4.287 0m0-2.143v8.574");
}

.w7a6n3b9a {
  width: 37px;
  height: 37px;
  x: 6px;
  y: 5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}
</style><rect class="w7a6n3b9a"/><path class="v2027bbow"/>`,
		"fallback": "arcticons:shop-samsung",
	});
}

export default Component;
