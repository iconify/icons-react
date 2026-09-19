import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgniirbex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgniirbex"/>`,
		"fallback": "cbi:lampada-parete",
	});
}

export default Component;
