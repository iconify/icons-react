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
		"content": `<style>.f5ntejz7p {
  fill: currentColor;
  d: path("M224 50H32a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h192a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14m2 142a2 2 0 0 1-2 2H32a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h192a2 2 0 0 1 2 2ZM50 136a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12H56a6 6 0 0 1-6-6m156 0a6 6 0 0 1-6 6h-96a6 6 0 0 1 0-12h96a6 6 0 0 1 6 6m-48 32a6 6 0 0 1-6 6H56a6 6 0 0 1 0-12h96a6 6 0 0 1 6 6m48 0a6 6 0 0 1-6 6h-16a6 6 0 0 1 0-12h16a6 6 0 0 1 6 6");
}
</style><path class="f5ntejz7p"/>`,
		"fallback": "ph:subtitles-light",
	});
}

export default Component;
