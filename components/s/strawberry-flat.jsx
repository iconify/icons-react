import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/r9r1ddcku.css';
import '../../css/a/a_eosd8fx.css';
import '../../css/q/q277pjbhm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="r9r1ddcku"/><path class="a_eosd8fx"/><path class="q277pjbhm"/></g>`,
		"fallback": "streamline-color:strawberry-flat",
	});
}

export default Component;
