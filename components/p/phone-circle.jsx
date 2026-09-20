import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gcnx14bvv.css';
import '../../css/z/zl5ottbeq.css';
import '../../css/g/gkts-7b_j.css';
import '../../css/n/nj8t49bec.css';
import '../../css/m/m7sca_byj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gcnx14bvv"/><path class="zl5ottbeq"/><path class="gkts-7b_j"/><path class="nj8t49bec"/><path class="m7sca_byj"/></g>`,
		"fallback": "streamline-ultimate-color:phone-circle",
	});
}

export default Component;
