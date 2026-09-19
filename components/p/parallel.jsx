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
		"content": `<style>.j3y6fabzt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m28.41 5.756l-17.352 4.648a7.5 7.5 0 0 0-5.302 9.186l4.648 17.352a7.5 7.5 0 0 0 9.186 5.302l17.352-4.648a7.5 7.5 0 0 0 5.302-9.186l-4.648-17.352a7.5 7.5 0 0 0-9.186-5.302m2.368 11.61l-3.555 13.268m-6.445-13.268l-3.555 13.268");
}
</style><path class="j3y6fabzt"/>`,
		"fallback": "arcticons:parallel",
	});
}

export default Component;
