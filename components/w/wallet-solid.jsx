import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/il7iefbum.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="il7iefbum"/>`,
		"fallback": "streamline-flex:wallet-solid",
	});
}

export default Component;
