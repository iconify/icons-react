import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osabq94gj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osabq94gj"/>`,
		"fallback": "thesvg-color:khan-academy",
	});
}

export default Component;
