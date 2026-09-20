import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtn8gnbxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtn8gnbxc"/>`,
		"fallback": "mdi:source-commit-local",
	});
}

export default Component;
