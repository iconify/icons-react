import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j74hjfewl.css';
import '../../css/d/drayhlbvh.css';
import '../../css/i/i4ls8l-_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j74hjfewl"/><path class="drayhlbvh"/><path class="i4ls8l-_j"/>`,
		"fallback": "stash:invoice-duotone",
	});
}

export default Component;
