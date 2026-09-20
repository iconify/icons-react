import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyhioebkj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyhioebkj"/>`,
		"fallback": "si:north-west-escape-alt-duotone",
	});
}

export default Component;
