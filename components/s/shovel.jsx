import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgd7xbcxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cgd7xbcxn"/>`,
		"fallback": "tabler:shovel",
	});
}

export default Component;
