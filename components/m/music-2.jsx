import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f0j3glb_n.css';
import '../../css/b/bv3jvlb5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="f0j3glb_n"/><path class="bv3jvlb5w"/></g>`,
		"fallback": "tdesign:music-2",
	});
}

export default Component;
