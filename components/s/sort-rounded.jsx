import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.sl1iepbdy {
  fill: currentColor;
  d: path("M4.5 17q-.213 0-.356-.144T4 16.499t.144-.356T4.5 16h3.75q.213 0 .356.144t.144.357t-.144.356T8.25 17zm0-4.5q-.213 0-.356-.144T4 11.999t.144-.356t.356-.143h9.366q.212 0 .356.144t.144.357t-.144.356t-.356.143zm0-4.5q-.213 0-.356-.144T4 7.499t.144-.356T4.5 7h15q.213 0 .356.144t.144.357t-.144.356T19.5 8z");
}
</style><path class="sl1iepbdy"/>`,
		"fallback": "material-symbols-light:sort-rounded",
	});
}

export default Component;
