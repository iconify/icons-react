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
		"content": `<style>.xfz-79w3n {
  fill: currentColor;
  d: path("M4 18h16V6H4zm-1 1V5h18v14zm1-1V6zm7.422-6.233q-.23-.233-.23-.578t.234-.575t.577-.23t.575.234t.23.578t-.233.574t-.578.23t-.575-.233M12 16.039q1.621-1.38 2.426-2.573t.805-2.193q0-1.529-.972-2.42q-.972-.892-2.259-.892t-2.259.892t-.972 2.42q0 1 .805 2.193T12 16.04");
}
</style><path class="xfz-79w3n"/>`,
		"fallback": "material-symbols-light:universal-local-outline-sharp",
	});
}

export default Component;
