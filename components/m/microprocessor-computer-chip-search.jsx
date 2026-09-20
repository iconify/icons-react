import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rlmsqmksn.css';
import '../../css/m/mp4-en0wo.css';
import '../../css/s/sico8fw_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="rlmsqmksn"/><path class="mp4-en0wo"/><path class="sico8fw_t"/></g>`,
		"fallback": "streamline-freehand:microprocessor-computer-chip-search",
	});
}

export default Component;
