import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntluh2bbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntluh2bbo"/>`,
		"fallback": "tabler:letter-b-small",
	});
}

export default Component;
