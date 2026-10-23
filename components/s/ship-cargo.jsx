import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imle5qb4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imle5qb4x"/>`,
		"fallback": "vadivam:ship-cargo",
	});
}

export default Component;
