import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_3kybcfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a_3kybcfz"/>`,
		"fallback": "streamline-logos:medium-logo-2-block",
	});
}

export default Component;
