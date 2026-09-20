import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c85n3ib1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c85n3ib1u"/>`,
		"fallback": "si:south-west-escape-fill",
	});
}

export default Component;
