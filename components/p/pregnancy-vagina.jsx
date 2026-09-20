import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdhlu2f7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdhlu2f7v"/>`,
		"fallback": "streamline-ultimate:pregnancy-vagina",
	});
}

export default Component;
