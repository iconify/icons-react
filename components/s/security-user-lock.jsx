import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asy189blx.css';
import '../../css/l/lveuvsb7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="asy189blx"/><path class="lveuvsb7v"/>`,
		"fallback": "streamline-freehand:security-user-lock",
	});
}

export default Component;
