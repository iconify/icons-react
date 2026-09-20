import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wxwloacjj.css';
import '../../css/v/vy3x4abmt.css';
import '../../css/b/bgbwufb-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="wxwloacjj"/><path class="vy3x4abmt"/><path class="bgbwufb-u"/></g>`,
		"fallback": "streamline-freehand-color:shop-street-sign",
	});
}

export default Component;
