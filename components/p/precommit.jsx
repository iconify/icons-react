import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhj-ll95a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhj-ll95a"/>`,
		"fallback": "simple-icons:precommit",
	});
}

export default Component;
