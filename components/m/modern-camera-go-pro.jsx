import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jv0tnvh6k.css';
import '../../css/k/ko4diswnn.css';
import '../../css/g/ggbkigbor.css';
import '../../css/c/cbce2qkkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="jv0tnvh6k"/><path class="ko4diswnn"/><path class="ggbkigbor"/><path class="cbce2qkkg"/></g>`,
		"fallback": "streamline-freehand-color:modern-camera-go-pro",
	});
}

export default Component;
