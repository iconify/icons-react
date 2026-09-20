import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqf4bq9yv.css';
import '../../css/l/lfav0yevu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqf4bq9yv"/><path class="lfav0yevu"/>`,
		"fallback": "streamline-pixel:interface-essential-dial-pad-finger-2",
	});
}

export default Component;
