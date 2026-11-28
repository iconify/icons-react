import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oijg09-qq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oijg09-qq"/>`,
		"fallback": "noviair:list-ordered",
	});
}

export default Component;
