import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtfewx74d.css';

const viewBox = {"width":2000,"height":2000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xtfewx74d"/>`,
		"fallback": "bpmn:screw-wrench",
	});
}

export default Component;
