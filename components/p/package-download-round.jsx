import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulw2hdb-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulw2hdb-c"/>`,
		"fallback": "coolicons:package-download-round",
	});
}

export default Component;
