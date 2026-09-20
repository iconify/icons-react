import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/ropr7qbpb.css';
import '../../css/t/tlw317tlk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ropr7qbpb"/><path class="tlw317tlk"/></g>`,
		"fallback": "lucide:reply",
	});
}

export default Component;
