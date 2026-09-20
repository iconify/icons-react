import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yoin-abmn.css';
import '../../css/u/u30087mys.css';
import '../../css/d/dtv5vwb9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yoin-abmn"/><path class="u30087mys"/><path class="dtv5vwb9b"/></g>`,
		"fallback": "streamline-freehand:modern-camera-go-pro",
	});
}

export default Component;
