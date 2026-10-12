import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xm9sh3z2f.css';
import '../../css/j/j319albkc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xm9sh3z2f"/><path class="j319albkc"/>`,
		"fallback": "garden:microphone-stroke-20",
	});
}

export default Component;
