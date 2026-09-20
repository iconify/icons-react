import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkoyy0bit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bkoyy0bit"/>`,
		"fallback": "mdi:relation-zero-or-many-to-zero-or-one",
	});
}

export default Component;
