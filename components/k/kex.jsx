import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x24otrb4s.css';
import '../../css/s/s5a3cqb5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x24otrb4s"/><path class="s5a3cqb5f"/>`,
		"fallback": "token:kex",
	});
}

export default Component;
