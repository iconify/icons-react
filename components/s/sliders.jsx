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
		"content": `<style>.huoxoibbk {
  d: path("M12.75 15.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m0 2a2.75 2.75 0 1 0 0-5.5a2.75 2.75 0 0 0 0 5.5m-10.25-8a1 1 0 0 1 1-1h1.625a1 1 0 0 1 0 2H3.5a1 1 0 0 1-1-1m6.5 0a1 1 0 0 1 1-1h6.5a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1");
}

.ik7tqsb5o {
  d: path("M2.5 4.75a1 1 0 0 1 1-1H10a1 1 0 1 1 0 2H3.5a1 1 0 0 1-1-1m11.375 0a1 1 0 0 1 1-1H16.5a1 1 0 1 1 0 2h-1.625a1 1 0 0 1-1-1");
}

.kp9s49bzi {
  d: path("M12.75 5.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m0 2a2.75 2.75 0 1 0 0-5.5a2.75 2.75 0 0 0 0 5.5m-10.25 7a1 1 0 0 1 1-1H10a1 1 0 1 1 0 2H3.5a1 1 0 0 1-1-1m11.375 0a1 1 0 0 1 1-1H16.5a1 1 0 1 1 0 2h-1.625a1 1 0 0 1-1-1");
}

.n1lsf0bnc {
  fill: currentColor;
  fill-rule: evenodd;
}

.xywitcc7q {
  d: path("M7.75 10.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m0 2a2.75 2.75 0 1 0 0-5.5a2.75 2.75 0 0 0 0 5.5");
}
</style><g clip-rule="evenodd" class="n1lsf0bnc"><path class="ik7tqsb5o"/><path class="kp9s49bzi"/><path class="huoxoibbk"/><path class="xywitcc7q"/></g>`,
		"fallback": "pepicons-pop:sliders",
	});
}

export default Component;
