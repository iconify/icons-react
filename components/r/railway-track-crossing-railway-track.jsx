import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwq1znuml.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwq1znuml"/>`,
		"fallback": "pinhead:railway-track-crossing-railway-track",
	});
}

export default Component;
