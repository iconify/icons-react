import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpwrxkbxn.css';
import '../../css/n/n7vgj_bwu.css';
import '../../css/d/d7g9unbzb.css';
import '../../css/z/zc6m5o--n.css';
import '../../css/w/w3nvhyzat.css';
import '../../css/f/fdn77cona.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpwrxkbxn"/><path class="n7vgj_bwu"/><path class="d7g9unbzb"/><path class="zc6m5o--n"/><path class="w3nvhyzat"/><path class="fdn77cona"/>`,
		"fallback": "selfhst:pigeonpod-dark",
	});
}

export default Component;
