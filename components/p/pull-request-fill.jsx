import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3g27jb3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g3g27jb3o"/>`,
		"fallback": "si:pull-request-fill",
	});
}

export default Component;
