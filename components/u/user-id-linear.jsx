import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nol19vq4t.css';
import '../../css/r/r5rugytbx.css';
import '../../css/e/ea90dub6v.css';
import '../../css/q/qbunz8cnn.css';
import '../../css/v/vhte9_bca.css';
import '../../css/l/lfowyvbbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="nol19vq4t"/><path class="r5rugytbx"/><path class="ea90dub6v"/><path class="qbunz8cnn"/><path class="vhte9_bca"/><path class="lfowyvbbt"/></g>`,
		"fallback": "solar:user-id-linear",
	});
}

export default Component;
