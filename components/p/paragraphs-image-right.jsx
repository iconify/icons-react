import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sj7kmjbqv.css';
import '../../css/r/rtfuvfbpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="sj7kmjbqv"/><path class="rtfuvfbpc"/></g>`,
		"fallback": "streamline-freehand-color:paragraphs-image-right",
	});
}

export default Component;
