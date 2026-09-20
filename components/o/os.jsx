import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a92uke88p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a92uke88p"/>`,
		"fallback": "token:os",
	});
}

export default Component;
