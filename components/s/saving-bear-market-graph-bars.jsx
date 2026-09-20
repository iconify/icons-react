import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/f-i5wnbdl.css';
import '../../css/d/djk6jvnak.css';
import '../../css/m/m5vvnhx0o.css';
import '../../css/g/g6a-1bcjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="f-i5wnbdl"/><path class="djk6jvnak"/><path class="m5vvnhx0o"/><path class="g6a-1bcjo"/></g>`,
		"fallback": "streamline-freehand-color:saving-bear-market-graph-bars",
	});
}

export default Component;
