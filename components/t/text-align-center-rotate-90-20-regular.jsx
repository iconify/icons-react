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
		"content": `<style>.euoz1wbkm {
  fill: currentColor;
  d: path("M15.5 4a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5m-5-2a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0v-15a.5.5 0 0 1 .5-.5M6 6.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0z");
}
</style><path class="euoz1wbkm"/>`,
		"fallback": "fluent:text-align-center-rotate-90-20-regular",
	});
}

export default Component;
