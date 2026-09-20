import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9kxaq83j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9kxaq83j"/>`,
		"fallback": "mdi:relation-zero-or-many-to-only-one",
	});
}

export default Component;
