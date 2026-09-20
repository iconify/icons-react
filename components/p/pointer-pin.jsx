import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/autq6ssyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="autq6ssyk"/>`,
		"fallback": "tabler:pointer-pin",
	});
}

export default Component;
