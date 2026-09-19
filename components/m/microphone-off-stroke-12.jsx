import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gu-rojbqe.css';
import '../../css/n/n6od47b6s.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gu-rojbqe"/><path class="n6od47b6s"/>`,
		"fallback": "garden:microphone-off-stroke-12",
	});
}

export default Component;
