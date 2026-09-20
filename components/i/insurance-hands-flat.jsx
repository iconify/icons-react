import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hnryxo0yr.css';
import '../../css/q/qp5mf3b-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="hnryxo0yr"/><path class="qp5mf3b-f"/></g>`,
		"fallback": "streamline-sharp-color:insurance-hands-flat",
	});
}

export default Component;
