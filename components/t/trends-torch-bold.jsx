import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfenr6sbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfenr6sbv"/>`,
		"fallback": "streamline-ultimate:trends-torch-bold",
	});
}

export default Component;
