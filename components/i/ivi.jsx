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
		"content": `<style>.b1-y4ocia {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  d: path("m24.11 27.48l-3.36-5.96l-3.34 5.96zm13.58 6.85l5.81-3.43l-5.81-3.45zm0-6.89l5.81 3.45v-6.88zm-10.19 6l3.34-5.96h-6.7z");
}

.ht4iwjkou {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  d: path("m17.41 27.48l3.37 5.96l3.33-5.96zm-3.35-5.99l3.37 5.96l3.33-5.96zM4.5 34.32l5.81-3.42l-5.81-3.45zm5.81-3.43v-6.88L4.5 27.44z");
}

.oxcurqh6d {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  d: path("m27.48 21.52l-3.34 5.96h6.7zm3.36 5.93l3.37-5.96h-6.73zm6.85-6.89l5.81-3.42v-.03l-5.81-3.42zm0 6.88v.02l5.81-3.45l-5.81-3.45zM4.5 20.55l5.81-3.42v-.03L4.5 13.68zm0 6.87v.03L10.31 24L4.5 20.55zm16.26 6.02h6.73l-3.36-5.96z");
}
</style><path class="b1-y4ocia"/><path class="oxcurqh6d"/><path class="ht4iwjkou"/>`,
		"fallback": "arcticons:ivi",
	});
}

export default Component;
