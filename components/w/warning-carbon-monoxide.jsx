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
		"content": `<style>.co9r225ei {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14.197 5.475Q13.487 4.168 12 4.168T9.803 5.475L3.244 17.557q-.678 1.25.048 2.471t2.149 1.222h13.118q1.422 0 2.149-1.222q.726-1.221.048-2.471zM10 18.25q-2.5 0-2.5-2.5q0-2.27 2.061-2.479q.841-1.24 2.439-1.24t2.439 1.24q2.061.209 2.061 2.479q0 2.5-2.5 2.5z");
}
</style><path class="co9r225ei"/>`,
		"fallback": "uix-solid:warning-carbon-monoxide",
	});
}

export default Component;
