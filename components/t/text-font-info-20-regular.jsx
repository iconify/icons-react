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
		"content": `<style>.ou7abeb6w {
  fill: currentColor;
  d: path("M7.957 3.836a.5.5 0 0 0-.94-.013L4.293 11h-.02v.054l-1.24 3.269a.5.5 0 0 0 .935.354L4.984 12h3.223q.149-.524.393-1H5.363l2.1-5.537l1.645 4.726q.343-.454.77-.828zm5.543 7.039a.625.625 0 1 0 0 1.25a.625.625 0 0 0 0-1.25m0 5.125a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v2a.5.5 0 0 0 .5.5m0-7a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9m0 8a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7");
}
</style><path class="ou7abeb6w"/>`,
		"fallback": "fluent:text-font-info-20-regular",
	});
}

export default Component;
