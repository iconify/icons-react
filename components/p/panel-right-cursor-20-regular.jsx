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
		"content": `<style>.ttrfmsblt {
  fill: currentColor;
  d: path("M18 6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h5.001v-1H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6.5v5a1.5 1.5 0 0 1 1 .379V4H15a2 2 0 0 1 2 2v7c0 .249-.046.487-.129.707l.754.747c.239-.43.375-.927.375-1.454zm-6.144 4.146a.5.5 0 0 0-.852.354l-.004 8a.5.5 0 0 0 .9.301l1.994-2.647l3.497.776a.5.5 0 0 0 .46-.843z");
}
</style><path class="ttrfmsblt"/>`,
		"fallback": "fluent:panel-right-cursor-20-regular",
	});
}

export default Component;
