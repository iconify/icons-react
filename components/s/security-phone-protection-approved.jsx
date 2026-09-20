import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/biwk14o8w.css';
import '../../css/x/xy09eobzi.css';
import '../../css/m/mpqq9629o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="biwk14o8w"/><path class="xy09eobzi"/><path class="mpqq9629o"/>`,
		"fallback": "streamline-freehand:security-phone-protection-approved",
	});
}

export default Component;
