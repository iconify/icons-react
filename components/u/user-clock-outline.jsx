import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xuu1fpbjf.css';
import '../../css/r/rkquswc8h.css';
import '../../css/l/l8bnbhbyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xuu1fpbjf"/><path class="rkquswc8h"/><path clip-rule="evenodd" class="l8bnbhbyw"/>`,
		"fallback": "basil:user-clock-outline",
	});
}

export default Component;
