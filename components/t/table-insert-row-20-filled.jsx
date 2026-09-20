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
		"content": `<style>.s3scr0bqb {
  fill: currentColor;
  d: path("M3.5 16a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1zm0-13a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1zM3 11a2 2 0 0 0 2 2h2V7H5a2 2 0 0 0-2 2zm9 2H8V7h4zm1 0V7h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2z");
}
</style><path class="s3scr0bqb"/>`,
		"fallback": "fluent:table-insert-row-20-filled",
	});
}

export default Component;
