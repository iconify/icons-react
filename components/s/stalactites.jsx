import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wo6_qdb5y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wo6_qdb5y"/>`,
		"fallback": "game-icons:stalactites",
	});
}

export default Component;
