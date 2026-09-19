import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufom-nbao.css';
import '../../css/n/nm31ulbpm.css';
import '../../css/c/cfg6-7biq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufom-nbao"/><path class="nm31ulbpm"/><path class="cfg6-7biq"/>`,
		"fallback": "fxemoji:spiralshell",
	});
}

export default Component;
