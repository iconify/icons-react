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
		"content": `<style>.pmfbtnyzl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m23.717 27.957l10.74 10.739h2.826L25.13 26.543");
}

.t1sne-g1s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.804 21.74V11.564l-2.26-2.26V24l14.695 14.696h2.826l-9.043-9.044");
}

.vkl8uacuu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.283 9.304v6.783H4.5zm9.043 21.479L42.19 9.304H28.24L13.543 24m14.697-.565l15.26 15.26h-2.826L26.826 24.849");
}

.xl1paz03f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.5 20.044v-7.348l2.26 2.26V17.5");
}
</style><path class="vkl8uacuu"/><path class="xl1paz03f"/><path class="t1sne-g1s"/><path class="pmfbtnyzl"/>`,
		"fallback": "arcticons:kotlin-conf",
	});
}

export default Component;
