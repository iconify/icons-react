import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szy26opxx.css';
import '../../css/c/csou2mbrq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szy26opxx"/><path class="csou2mbrq"/>`,
		"fallback": "token:ramp",
	});
}

export default Component;
