import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4zef2_2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h4zef2_2d"/>`,
		"fallback": "reicon:turntable-note",
	});
}

export default Component;
