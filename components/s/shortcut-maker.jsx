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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zxp8qmprg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m34.5 23.43l-2.978-2.978m-1.836-1.818v-.017l-3.439-3.438v2.851m0 2.184a10.5 10.5 0 0 0-6.839 2.497m-1.97 1.951a21.2 21.2 0 0 0-3.938 8.159c-.039-.019 2.603-5.746 10.493-6.192M34.5 23.43l-2.979 2.978m-1.835 1.817v.017l-3.439 3.438v-5.058");
}
</style><path class="zxp8qmprg"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:shortcut-maker",
	});
}

export default Component;
