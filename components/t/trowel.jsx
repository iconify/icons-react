import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvu5yqbbf.css';
import '../../css/s/s68hkccgp.css';
import '../../css/k/k2vqxhb3v.css';
import '../../css/k/k7szp1b9w.css';
import '../../css/q/q11zvkdoq.css';
import '../../css/p/p1xpkg8dg.css';
import '../../css/k/kfazthbtj.css';
import '../../css/w/wmq7p2_kn.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvu5yqbbf"/><path class="s68hkccgp"/><path class="k2vqxhb3v"/><path class="k7szp1b9w"/><path class="q11zvkdoq"/><path class="p1xpkg8dg"/><path class="kfazthbtj"/><ellipse class="wmq7p2_kn"/>`,
		"fallback": "openmoji:trowel",
	});
}

export default Component;
