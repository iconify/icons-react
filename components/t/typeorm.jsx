import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kiwqdl9ga.css';
import '../../css/g/gkmrzoxxh.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kiwqdl9ga"/><path class="gkmrzoxxh"/>`,
		"fallback": "devicon:typeorm",
	});
}

export default Component;
