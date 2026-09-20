import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/stpj4mbrz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="stpj4mbrz"/>`,
		"fallback": "mdi:relation-one-or-many-to-zero-or-many",
	});
}

export default Component;
