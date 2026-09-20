import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aoe1u27hn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aoe1u27hn"/>`,
		"fallback": "mdi:source-commit-end",
	});
}

export default Component;
