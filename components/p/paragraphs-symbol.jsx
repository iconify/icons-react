import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w70lsgs8c.css';
import '../../css/d/dlpk8tb7x.css';
import '../../css/p/pvytqg7gd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="w70lsgs8c"><path class="dlpk8tb7x"/><path class="pvytqg7gd"/></g>`,
		"fallback": "streamline-freehand-color:paragraphs-symbol",
	});
}

export default Component;
