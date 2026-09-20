import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvc0w3uso.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dvc0w3uso"/>`,
		"fallback": "streamline-flex:scanner-bar-code-remix",
	});
}

export default Component;
