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
		"content": `<style>.a4-nrdb7m {
  d: path("M12 5a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.fwtwsacfh {
  d: path("M10.707 10.707a1 1 0 0 1-1.414-1.414l6-6a1 1 0 1 1 1.414 1.414z");
}

.hxpu3kbqp {
  d: path("M15 15v-3.5a1 1 0 1 1 2 0V16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4.5a1 1 0 0 1 0 2H5v10zm2-7a1 1 0 1 1-2 0V4a1 1 0 1 1 2 0z");
}
</style><g class="cuyn6tgcc"><path class="fwtwsacfh"/><path class="hxpu3kbqp"/><path class="a4-nrdb7m"/></g>`,
		"fallback": "pepicons-pop:open",
	});
}

export default Component;
