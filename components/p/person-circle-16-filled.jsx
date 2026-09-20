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
		"content": `<style>.kxq_mzfbn {
  fill: currentColor;
  d: path("M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1M6 8.5A1.5 1.5 0 0 0 4.5 10c0 1.25 1 2.5 3.5 2.5s3.5-1.255 3.5-2.5A1.5 1.5 0 0 0 10 8.5zm2-5a2 2 0 1 0 0 4a2 2 0 0 0 0-4");
}
</style><path class="kxq_mzfbn"/>`,
		"fallback": "fluent:person-circle-16-filled",
	});
}

export default Component;
