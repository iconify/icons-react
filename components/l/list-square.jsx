import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jor-usn7v.css';
import '../../css/l/l2e55ef_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jor-usn7v"/><path class="l2e55ef_p"/>`,
		"fallback": "boxicons:list-square",
	});
}

export default Component;
