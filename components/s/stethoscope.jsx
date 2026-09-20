import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/isucn5_rp.css';
import '../../css/y/ye_2xub1a.css';
import '../../css/b/bxmbxnbtj.css';
import '../../css/p/pd6rn3b6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="isucn5_rp"/><path class="ye_2xub1a"/><path class="bxmbxnbtj"/><path class="pd6rn3b6w"/></g>`,
		"fallback": "streamline-cyber-color:stethoscope",
	});
}

export default Component;
