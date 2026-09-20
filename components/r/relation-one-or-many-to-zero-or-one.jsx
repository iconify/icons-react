import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbw18bb9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pbw18bb9q"/>`,
		"fallback": "mdi:relation-one-or-many-to-zero-or-one",
	});
}

export default Component;
