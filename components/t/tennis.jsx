import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdrq5fk-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hdrq5fk-d"/>`,
		"fallback": "reicon:tennis",
	});
}

export default Component;
