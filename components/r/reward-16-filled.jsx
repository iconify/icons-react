import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wshy7bbyo {
  fill: currentColor;
  d: path("M3.5 2A1.5 1.5 0 0 0 2 3.5v1.193c0 .52.27 1.002.711 1.275l3.866 2.39a3 3 0 1 0 2.846 0l3.866-2.39A1.5 1.5 0 0 0 14 4.693V3.5A1.5 1.5 0 0 0 12.5 2zM6 6.826V3h4v3.826L8.263 7.9a.5.5 0 0 1-.526 0zM8 9a2 2 0 1 1 0 4a2 2 0 0 1 0-4");
}
</style><path class="wshy7bbyo"/>`,
		"fallback": "fluent:reward-16-filled",
	});
}

export default Component;
