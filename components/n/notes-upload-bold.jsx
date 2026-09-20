import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/teryzmwzf.css';
import '../../css/f/f1vawn50g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="teryzmwzf"/><path class="f1vawn50g"/>`,
		"fallback": "streamline-ultimate:notes-upload-bold",
	});
}

export default Component;
