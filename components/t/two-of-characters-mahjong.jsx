import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/celtzhb4n.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="celtzhb4n"/>`,
		"fallback": "dinkie-icons:two-of-characters-mahjong",
	});
}

export default Component;
