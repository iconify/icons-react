import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q1ejgib4k.css';
import '../../css/g/grac-wbyl.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q1ejgib4k"/><path class="grac-wbyl"/>`,
		"fallback": "ep:top-left",
	});
}

export default Component;
