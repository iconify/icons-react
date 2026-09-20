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
		"content": `<style>.bo1k799qb {
  fill: currentColor;
  d: path("M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v2.879l-.94-.94A1.5 1.5 0 0 0 10.5 7.5h-5a.5.5 0 0 0 0 1h1.854A4 4 0 0 0 6 11.5c0 .899.298 1.733.8 2.401q.04.052.082.099H4.5A2.5 2.5 0 0 1 2 11.5zm9 1a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5m1.354 1.646a.5.5 0 0 0-.708.708l.647.646H10a3 3 0 0 0-2.4 4.8a.5.5 0 1 0 .8-.6A2 2 0 0 1 10 9.5h2.293l-.647.646a.5.5 0 0 0 .708.708l1.5-1.5a.5.5 0 0 0 0-.708zM15.4 9.7a.5.5 0 0 0-.8.6a2 2 0 0 1-1.6 3.2h-2.293l.647-.646a.5.5 0 0 0-.708-.708l-1.5 1.5a.5.5 0 0 0 0 .708l1.5 1.5a.5.5 0 0 0 .708-.708l-.647-.646H13a3 3 0 0 0 2.4-4.8");
}
</style><path class="bo1k799qb"/>`,
		"fallback": "fluent:square-text-arrow-repeat-all-16-filled",
	});
}

export default Component;
