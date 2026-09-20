import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tx-2j1bvi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tx-2j1bvi"/>`,
		"fallback": "streamline-flex:moustache-solid",
	});
}

export default Component;
