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

.v6ulq6e-s {
  fill-rule: evenodd;
  d: path("M10.866 15.499a1 1 0 0 1-1.732 0l-5.769-10A1 1 0 0 1 4.231 4H15.77a1 1 0 0 1 .866 1.5z");
}

.xedf9ccsf {
  d: path("M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}

.yr1mq_boa {
  fill-rule: evenodd;
  d: path("M3.365 5.5A1 1 0 0 1 4.231 4H15.77a1 1 0 0 1 .866 1.5l-5.769 9.999a1 1 0 0 1-1.732 0zM10 10.997L12.306 7H7.694z");
}
</style><g class="cuyn6tgcc"><path clip-rule="evenodd" class="v6ulq6e-s"/><path clip-rule="evenodd" class="yr1mq_boa"/><path class="xedf9ccsf"/></g>`,
		"fallback": "pepicons-pop:triangle-down-filled-off",
	});
}

export default Component;
