import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pdj3gvbnp.css';
import '../../css/m/mys4ucbkk.css';
import '../../css/a/ajmr8884e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="pdj3gvbnp"/><path class="mys4ucbkk"/><path class="ajmr8884e"/></g>`,
		"fallback": "streamline-freehand-color:network-connector",
	});
}

export default Component;
