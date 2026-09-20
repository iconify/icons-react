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
		"content": `<style>.xe_pfxwzf {
  fill: currentColor;
  d: path("m14.07 11.258l-.695-.683L15.66 8h-4.854l-.994-1h6.738l1.8-2H7.811l-1-1h11.672q.425 0 .676.29q.252.289.252.633q0 .16-.061.314q-.062.154-.185.302zM7.5 20.5q-.213 0-.357-.143T7 20t.143-.357t.357-.143h4v-6.579l-8.4-8.4q-.14-.14-.15-.341t.15-.366q.165-.166.357-.166t.356.166l16.38 16.378q.145.147.155.345t-.156.363q-.165.166-.356.166q-.192 0-.357-.166l-6.973-6.973L12.5 19.5h4q.214 0 .357.143T17 20t-.143.357t-.357.143z");
}
</style><path class="xe_pfxwzf"/>`,
		"fallback": "material-symbols-light:no-drinks-outline-rounded",
	});
}

export default Component;
