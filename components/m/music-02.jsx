import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wzu4c0bsi.css';
import '../../css/z/zf_z6v05p.css';
import '../../css/n/nqvv9lbxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="wzu4c0bsi"/><circle class="zf_z6v05p"/><path class="nqvv9lbxu"/></g>`,
		"fallback": "hugeicons:music-02",
	});
}

export default Component;
