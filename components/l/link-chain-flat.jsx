import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xe9-4qb5a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xe9-4qb5a"/>`,
		"fallback": "streamline-color:link-chain-flat",
	});
}

export default Component;
