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
		"content": `<style>.wqczv5byo {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m14.919 7.533l4.44 7.647q.979 1.688.006 3.379q-.974 1.691-2.925 1.691H7.56q-1.951 0-2.925-1.691t.006-3.379l4.44-7.647q.976-1.68 2.919-1.68t2.919 1.68");
}
</style><path class="wqczv5byo"/>`,
		"fallback": "uix-solid:triangle",
	});
}

export default Component;
