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
		"content": `<style>.psm7-t_gv {
  fill: currentColor;
  d: path("m209.72 58.25l-80-24A6 6 0 0 0 122 40v113.05A46 46 0 1 0 134 184V96.06l72.28 21.69A6 6 0 0 0 214 112V64a6 6 0 0 0-4.28-5.75M88 218a34 34 0 1 1 34-34a34 34 0 0 1-34 34m114-114.06l-68-20.4V48.06l68 20.4Z");
}
</style><path class="psm7-t_gv"/>`,
		"fallback": "ph:music-note-light",
	});
}

export default Component;
