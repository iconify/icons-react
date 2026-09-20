import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0k6b2b-n.css';
import '../../css/n/ndmpziulf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0k6b2b-n"/><path class="ndmpziulf"/>`,
		"fallback": "tdesign:mushroom-filled",
	});
}

export default Component;
