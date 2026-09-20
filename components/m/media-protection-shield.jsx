import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dawrykb_t.css';
import '../../css/s/srztgmmzo.css';
import '../../css/u/ugkergbbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dawrykb_t"/><path class="srztgmmzo"/><path class="ugkergbbm"/>`,
		"fallback": "streamline-freehand:media-protection-shield",
	});
}

export default Component;
