import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.esxup9bzs {
  fill-rule: evenodd;
  d: path("M5.705 17.886L10 15.97l4.295 1.915a1 1 0 0 0 1.402-1.019l-.494-4.677l3.148-3.493a1 1 0 0 0-.535-1.647l-4.6-.976L10.866 2a1 1 0 0 0-1.732 0l-2.35 4.074l-4.6.976a1 1 0 0 0-.535 1.647l3.148 3.494l-.494 4.676a1 1 0 0 0 1.402 1.018m3.888-3.924l-3.119 1.39l.359-3.395a1 1 0 0 0-.252-.774L4.295 8.646l3.34-.708a1 1 0 0 0 .66-.478L10 4.502l1.706 2.958a1 1 0 0 0 .659.478l3.34.708l-2.286 2.537a1 1 0 0 0-.252.774l.359 3.396l-3.119-1.39a1 1 0 0 0-.814 0");
}

.xedf9ccsf {
  d: path("M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}
</style><g class="cuyn6tgcc"><path clip-rule="evenodd" class="esxup9bzs"/><path class="xedf9ccsf"/></g>`,
		"fallback": "pepicons-pop:star-off",
	});
}

export default Component;
