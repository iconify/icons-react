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
		"content": `<style>.xt8n6zwdw {
  fill: currentColor;
  d: path("M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m6-7a7 7 0 1 0 0 14A7 7 0 0 0 8 1m1.25 5H7.444l-.125.996h.094c.324 0 .745.003.906.026a2.25 2.25 0 1 1-2.248 3.377a.5.5 0 1 1 .86-.511a1.25 1.25 0 0 0 2.313-.464c.098-.7-.442-1.384-1.15-1.418L7.905 8a37 37 0 0 0-1.147 0a.502.502 0 0 1-.503-.562l.25-2A.5.5 0 0 1 7.001 5h2.25a.5.5 0 0 1 0 1");
}
</style><path class="xt8n6zwdw"/>`,
		"fallback": "fluent:number-circle-5-16-regular",
	});
}

export default Component;
