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
		"content": `<style>.fsai3jbie {
  d: path("M20.153 27.693h7.579v7.446h-7.58m7.58-.085H42.5V42.5H27.732z");
}

.psbid7bvi {
  d: path("M12.944 5.5v7.387H5.5v22.18h7.474V42.5h7.179V20.333H42.5v-7.345h-7.56V5.5zm12.799 37h-3.601M34.94 22.333v10.722");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="psbid7bvi"/><path class="fsai3jbie"/></g>`,
		"fallback": "arcticons:retro-bowl",
	});
}

export default Component;
