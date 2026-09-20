import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjwxeybpm.css';
import '../../css/i/ifjc3lcbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjwxeybpm"/><path class="ifjc3lcbe"/>`,
		"fallback": "pixel:people-carry-solid",
	});
}

export default Component;
