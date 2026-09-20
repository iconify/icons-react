import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qwm-occyl.css';
import '../../css/m/mg2yxg0pk.css';
import '../../css/n/n4vlayblf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qwm-occyl"/><path class="mg2yxg0pk"/><path class="n4vlayblf"/></g>`,
		"fallback": "streamline-freehand-color:stamps-portrait-1",
	});
}

export default Component;
