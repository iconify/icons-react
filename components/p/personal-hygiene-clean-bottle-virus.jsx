import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzc8en32u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzc8en32u"/>`,
		"fallback": "covid:personal-hygiene-clean-bottle-virus",
	});
}

export default Component;
