import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afh00gbxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afh00gbxn"/>`,
		"fallback": "token:polygon",
	});
}

export default Component;
