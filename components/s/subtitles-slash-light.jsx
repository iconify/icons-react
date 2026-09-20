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
		"content": `<style>.unbzqny4a {
  fill: currentColor;
  d: path("M52.44 36a6 6 0 0 0-8.88 8L49 50H32a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h158.8l12.76 14a6 6 0 0 0 8.88-8.08ZM32 194a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h27.89l61.82 68H104a6 6 0 0 0 0 12h28.62l18.18 20H56a6 6 0 0 0 0 12h105.71l18.18 20Zm18-58a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12H56a6 6 0 0 1-6-6m188-72v130.83a6 6 0 1 1-12 0V64a2 2 0 0 0-2-2H105.79a6 6 0 0 1 0-12H224a14 14 0 0 1 14 14m-59.48 78a6 6 0 1 1 0-12H200a6 6 0 0 1 0 12Z");
}
</style><path class="unbzqny4a"/>`,
		"fallback": "ph:subtitles-slash-light",
	});
}

export default Component;
