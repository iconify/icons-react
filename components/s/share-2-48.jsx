import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5jpf8r7p.css';
import '../../css/c/ctxjx93qy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5jpf8r7p"/><path class="ctxjx93qy"/>`,
		"fallback": "energy-icons:share-2-48",
	});
}

export default Component;
