import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbxbaodhg.css';
import '../../css/e/e7_pbtk1d.css';
import '../../css/u/ufvkgz_hq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vbxbaodhg"><circle class="e7_pbtk1d"/><path class="ufvkgz_hq"/></g>`,
		"fallback": "lets-icons:sun-duotone",
	});
}

export default Component;
