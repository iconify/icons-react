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
		"content": `<style>.hobysfb1v {
  fill: currentColor;
  d: path("M4 13.27v-1h12.808q.92 0 1.556-.636T19 10.077t-.636-1.557t-1.556-.635H4.902l2.177 2.152l-.713.713L3 7.385l3.366-3.366l.713.689l-2.177 2.176h11.906q1.323 0 2.258.935q.934.935.934 2.258t-.935 2.258t-2.257.934zM4 21v-4.962h16V21zm1-1h3.998v-2.962H5zm4.998 0h3.979v-2.962H9.998zm5.004 0H19v-2.962h-3.998z");
}
</style><path class="hobysfb1v"/>`,
		"fallback": "material-symbols-light:repartition",
	});
}

export default Component;
