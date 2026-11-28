import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0g4dobjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0g4dobjk"/>`,
		"fallback": "iconaut:mail-cog-solid",
	});
}

export default Component;
