import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/caexggh5f.css';
import '../../css/o/o_tmdovfv.css';
import '../../css/z/zsgh3xw_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="caexggh5f"/><path class="o_tmdovfv"/><path class="zsgh3xw_g"/></g>`,
		"fallback": "streamline-freehand:microprocessor-computer-chip-overheat",
	});
}

export default Component;
