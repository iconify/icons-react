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
		"content": `<style>.n9o4ltq6z {
  d: path("m40.9 14.273l-.055 19.454L24.027 43.5l.056-19.453L40.9 14.273zm-16.817 9.774L24.027 43.5L7.1 33.727l.055-19.454l16.928 9.774z");
}

.ul-gq7mew {
  d: path("m40.9 14.273l-16.817 9.774l-16.928-9.774L23.973 4.5L40.9 14.273z");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="c y9tr6bcfx"><path class="n9o4ltq6z"/><path class="ul-gq7mew"/></g>`,
		"fallback": "arcticons:minecraft-alt",
	});
}

export default Component;
