import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fym710b6o.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fym710b6o"/>`,
		"fallback": "whh:pixelbattleaxe",
	});
}

export default Component;
