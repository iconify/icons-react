import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcu_p7b4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcu_p7b4m"/>`,
		"fallback": "codex:star",
	});
}

export default Component;
