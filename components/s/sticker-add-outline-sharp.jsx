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
		"content": `<style>.fddtdvwlu {
  fill: currentColor;
  d: path("M11.5 15q1.725 0 3-1.125T16 11.05L8 13.3q.65.8 1.55 1.25t1.95.45m-4.15-3.75L10 10.5q.1-.7-.35-1.225T8.5 8.75q-.625 0-1.062.438T7 10.25q0 .275.1.525t.25.475m6-1.75L16 8.75q.125-.7-.337-1.225T14.5 7q-.625 0-1.062.438T13 8.5q0 .275.1.525t.25.475M3 21V3h12v2H5v14h10v-4h4V9h2v7l-5 5zM19 7V5h-2V3h2V1h2v2h2v2h-2v2z");
}
</style><path class="fddtdvwlu"/>`,
		"fallback": "material-symbols:sticker-add-outline-sharp",
	});
}

export default Component;
