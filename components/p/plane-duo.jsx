import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lskr6z3ls.css';
import '../../css/i/ius8nukxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lskr6z3ls secondary"/><path class="ius8nukxs primary"/>`,
		"fallback": "iconaut:plane-duo",
	});
}

export default Component;
