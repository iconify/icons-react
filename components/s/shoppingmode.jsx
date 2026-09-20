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
		"content": `<style>.j4lqq_xbg {
  fill: currentColor;
  d: path("M11.007 21q-.303 0-.61-.121q-.306-.121-.55-.364l-6.362-6.361q-.25-.248-.365-.548t-.114-.61t.114-.616t.365-.551l8.338-8.345q.223-.222.527-.353T12.98 3h6.387q.69 0 1.162.48T21 4.635v6.386q0 .332-.121.632t-.358.518l-8.363 8.345q-.242.242-.545.363t-.606.121m6.435-13.442q.425 0 .722-.292t.298-.708q0-.425-.295-.722t-.717-.297t-.714.295t-.294.716t.292.715t.708.293");
}
</style><path class="j4lqq_xbg"/>`,
		"fallback": "material-symbols-light:shoppingmode",
	});
}

export default Component;
