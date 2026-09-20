import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psxx8-rbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="psxx8-rbw"/>`,
		"fallback": "reicon:shield-filled",
	});
}

export default Component;
