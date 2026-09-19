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
		"content": `<style>.cozznacza {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m14.1 27.792l3.3-3.5l3.3 3.5l3.3-3.5l3.3 3.5l3.3-3.5l3.3 3.5l-10 9.5z");
}

.d5j_obc0p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.482 5.496c-3.9 0-6.84 3.1-7 7l-.98 23c-.2 3.9 3.1 7 7 7h23c3.9 0 7.16-3.1 7-7l-.98-23c-.2-3.9-3.1-7-7-7c0 1.1-.086 3.403-.87 4.903c-1 1.9-3 3.1-5.2 3.1h-9c-2.3 0-4.2-1.3-5.2-3.1c-.79-1.4-.77-3.803-.77-4.903m-.382 0h21.04");
}

.dbiwf2acp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 18.31l2.99 2.99L24 24.293L21.007 21.3z");
}
</style><path class="d5j_obc0p"/><path class="cozznacza"/><path class="dbiwf2acp"/>`,
		"fallback": "arcticons:uptodown-app-store",
	});
}

export default Component;
