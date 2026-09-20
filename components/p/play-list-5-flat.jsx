import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/inkrjwb3i.css';
import '../../css/g/gniky1bbo.css';
import '../../css/b/bwzd4r7_c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="inkrjwb3i"/><path class="gniky1bbo"/><path class="bwzd4r7_c"/></g>`,
		"fallback": "streamline-color:play-list-5-flat",
	});
}

export default Component;
