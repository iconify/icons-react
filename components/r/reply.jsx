import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltktxhbob.css';
import '../../css/j/j6gfa_94f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltktxhbob"/><path class="j6gfa_94f"/>`,
		"fallback": "prime:reply",
	});
}

export default Component;
