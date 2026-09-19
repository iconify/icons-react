import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogt714bjg.css';
import '../../css/t/trltflb5m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogt714bjg"/><path class="trltflb5m"/>`,
		"fallback": "carbon:task-tools",
	});
}

export default Component;
