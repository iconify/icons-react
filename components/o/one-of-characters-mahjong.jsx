import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqi0klb5s.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqi0klb5s"/>`,
		"fallback": "dinkie-icons:one-of-characters-mahjong",
	});
}

export default Component;
