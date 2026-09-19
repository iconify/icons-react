import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hltws9d4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hltws9d4d"/>`,
		"fallback": "cbi:united-airlines",
	});
}

export default Component;
