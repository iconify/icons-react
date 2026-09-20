import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/k1y5hqzml.css';
import '../../css/p/pjyec1bsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="k1y5hqzml"/><path class="pjyec1bsv"/></g>`,
		"fallback": "streamline-freehand-color:upload-brackets",
	});
}

export default Component;
