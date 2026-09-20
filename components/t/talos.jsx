import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ou8w6sxyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ou8w6sxyv"/>`,
		"fallback": "thesvg:talos",
	});
}

export default Component;
