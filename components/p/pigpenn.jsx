import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/po1k9ebec.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="po1k9ebec"/>`,
		"fallback": "whh:pigpenn",
	});
}

export default Component;
