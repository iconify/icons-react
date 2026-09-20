import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynyb3aclq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ynyb3aclq"/>`,
		"fallback": "tabler:square-letter-t-filled",
	});
}

export default Component;
