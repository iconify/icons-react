import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwi6y6jmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwi6y6jmk"/>`,
		"fallback": "tabler:square-half",
	});
}

export default Component;
