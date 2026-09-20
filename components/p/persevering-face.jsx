import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfn4zobhp.css';
import '../../css/t/t--0pgbkv.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/q/qmnpc1bre.css';
import '../../css/s/sklclnbrc.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfn4zobhp"/><path class="t--0pgbkv"/><g class="x8poo_bjf"><circle class="qmnpc1bre"/><path class="sklclnbrc"/></g>`,
		"fallback": "openmoji:persevering-face",
	});
}

export default Component;
