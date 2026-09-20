import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o0hea2bmm.css';
import '../../css/w/w8tywgg4n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="o0hea2bmm"/><path class="w8tywgg4n"/></g>`,
		"fallback": "streamline-flex-color:smiley-blessed-flat",
	});
}

export default Component;
