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
		"content": `<style>.tnxa35f2s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m16.722 32.211l6.9-6.9L33.911 35.6l-6.9 6.9");
}

.xqbfcybmg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m7.098 22.587l13.89-13.89c4.263-4.262 11.173-4.262 15.435 0h0c4.262 4.262 4.262 11.172 0 15.434l4.479 4.478");
}
</style><path class="tnxa35f2s"/><path class="xqbfcybmg"/>`,
		"fallback": "arcticons:pharmeasy",
	});
}

export default Component;
