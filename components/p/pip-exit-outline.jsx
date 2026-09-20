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
		"content": `<style>.hnzpk0l_b {
  fill: currentColor;
  d: path("M4.616 19q-.691 0-1.153-.462T3 17.384v-6.153h1v6.154q0 .269.173.442t.443.173h14.769q.269 0 .442-.173t.173-.442V6.615q0-.269-.173-.442T19.385 6H11.23V5h8.154q.69 0 1.153.463T21 6.616v10.769q0 .69-.462 1.153T19.385 19zm12.651-3l.714-.713L13.669 11h3.312v-1h-5v5h1v-3.286zM3 8.846V5h5.846v3.846zM12 12");
}
</style><path class="hnzpk0l_b"/>`,
		"fallback": "material-symbols-light:pip-exit-outline",
	});
}

export default Component;
