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
		"content": `<style>.fqdydbb7x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m26.581 43.5l-10.937-6.769V8.137l10.937 6.768zm-10.937-6.769l10.937-6.768");
}

.fstsr3e1c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.644 8.137L21.419 4.5l10.937 6.768v28.595L26.581 43.5m0-28.595l5.775-3.637");
}
</style><path class="fqdydbb7x"/><path class="fstsr3e1c"/>`,
		"fallback": "arcticons:monolith",
	});
}

export default Component;
