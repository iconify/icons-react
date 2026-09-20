import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9ewivb3f.css';
import '../../css/q/q7f-xhboq.css';
import '../../css/z/z6-akobdf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9ewivb3f"/><path class="q7f-xhboq"/><path class="z6-akobdf"/>`,
		"fallback": "oui:percent",
	});
}

export default Component;
