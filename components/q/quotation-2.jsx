import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/x/xqeh83b7f.css';
import '../../css/o/oj963qb8m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="xqeh83b7f"/><path class="oj963qb8m"/></g>`,
		"fallback": "streamline-plump-color:quotation-2",
	});
}

export default Component;
