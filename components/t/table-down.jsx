import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gir9mfh4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gir9mfh4t"/>`,
		"fallback": "tabler:table-down",
	});
}

export default Component;
