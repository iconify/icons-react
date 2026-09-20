import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yam2w2bsd.css';
import '../../css/z/zozy4rb8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="yam2w2bsd"/><path class="zozy4rb8h"/></g>`,
		"fallback": "streamline-freehand-color:movies-hot-trending",
	});
}

export default Component;
