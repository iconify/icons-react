import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vyroutbbi.css';
import '../../css/d/dgmtc731l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vyroutbbi"/><circle class="dgmtc731l"/>`,
		"fallback": "ooui:logo-wikimedia-commons",
	});
}

export default Component;
