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
		"content": `<style>.qnr8eo92m {
  fill: currentColor;
  d: path("M16.846 16.885v-1H21v1zm-2-4.385v-1H21v1zm-2-4.384v-1H21v1zm-6.192 2.812Q6 10.278 6 9.35t.65-1.582q.649-.654 1.576-.654t1.582.65t.654 1.577t-.65 1.581t-1.577.654t-1.581-.65M3 16.886V15.56q0-.326.164-.621q.163-.296.44-.475q1.048-.598 2.195-.916t2.432-.318t2.432.318t2.195.917q.277.178.44.474q.164.295.164.621v1.323z");
}
</style><path class="qnr8eo92m"/>`,
		"fallback": "material-symbols-light:person-text-sharp",
	});
}

export default Component;
