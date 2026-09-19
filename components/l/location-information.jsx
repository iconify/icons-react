import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jaaaw1bso.css';
import '../../css/n/nlnn0ibiz.css';
import '../../css/t/txfhqbbeh.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jaaaw1bso"/><path class="nlnn0ibiz"/><path class="txfhqbbeh"/>`,
		"fallback": "ep:location-information",
	});
}

export default Component;
