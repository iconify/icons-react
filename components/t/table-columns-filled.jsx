import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b05i6cbat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b05i6cbat"/>`,
		"fallback": "boxicons:table-columns-filled",
	});
}

export default Component;
