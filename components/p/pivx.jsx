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
		"content": `<style>.qoaen17-d {
  d: path("M12.9 4.8H5.7V3h7.2a5.4 5.4 0 0 1 0 10.8H7.5V21H5.7v-9h7.2a3.6 3.6 0 0 0 0-7.2");
}

.t9i6qbbca {
  d: path("M11.7 9h-6V7.2h6z");
}

.xu114rbwc {
  fill: var(--svg-color--5e4778, #5e4778);
}
</style><g class="xu114rbwc"><path class="qoaen17-d"/><path class="t9i6qbbca"/></g>`,
		"fallback": "token-branded:pivx",
	});
}

export default Component;
