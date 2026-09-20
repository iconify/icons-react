import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwcd64bwj.css';
import '../../css/v/vezww5hdy.css';
import '../../css/i/ipwmjm2oi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwcd64bwj"/><path class="vezww5hdy"/><path class="ipwmjm2oi"/>`,
		"fallback": "pixel:pro-solid",
	});
}

export default Component;
