import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/e8tj0wb-h.css';
import '../../css/y/ymrcpuukv.css';
import '../../css/m/me66crjtz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="e8tj0wb-h"/><path class="ymrcpuukv"/><path class="me66crjtz"/></g>`,
		"fallback": "streamline-freehand:microprocessor-computer-chip-flash",
	});
}

export default Component;
