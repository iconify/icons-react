import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.t8g3p4psy {
  fill: currentColor;
  d: path("M90 144v-16a6 6 0 0 1 12 0v16a6 6 0 0 1-12 0m38 6a6 6 0 0 0 6-6v-24a6 6 0 0 0-12 0v24a6 6 0 0 0 6 6m32 0a6 6 0 0 0 6-6v-32a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6m54-72v100h10a6 6 0 0 1 0 12h-90v20.84a22 22 0 1 1-12 0V190H32a6 6 0 0 1 0-12h10V78h-2a14 14 0 0 1-14-14V48a14 14 0 0 1 14-14h176a14 14 0 0 1 14 14v16a14 14 0 0 1-14 14Zm-86 144a10 10 0 1 0 10 10a10 10 0 0 0-10-10M40 66h176a2 2 0 0 0 2-2V48a2 2 0 0 0-2-2H40a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2m162 12H54v100h148Z");
}
</style><path class="t8g3p4psy"/>`,
		"fallback": "ph:projector-screen-chart-light",
	});
}

export default Component;
