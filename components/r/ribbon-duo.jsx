import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyfe3ob5n.css';
import '../../css/h/hxxrwcb9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary yyfe3ob5n"/><path class="hxxrwcb9s primary"/>`,
		"fallback": "iconaut:ribbon-duo",
	});
}

export default Component;
