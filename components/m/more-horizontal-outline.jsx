import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1xy6nh9u.css';
import '../../css/d/dq12o7ykb.css';
import '../../css/b/b74ikwezj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="n1xy6nh9u"/><circle class="dq12o7ykb"/><circle class="b74ikwezj"/>`,
		"fallback": "eva:more-horizontal-outline",
	});
}

export default Component;
