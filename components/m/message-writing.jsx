import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pamsoyntu.css';
import '../../css/f/ftg34obra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pamsoyntu"/><path class="ftg34obra"/>`,
		"fallback": "ci:message-writing",
	});
}

export default Component;
