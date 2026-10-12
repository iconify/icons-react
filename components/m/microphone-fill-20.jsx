import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnjia1bzi.css';
import '../../css/x/x5gitzbnd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xnjia1bzi"/><path class="x5gitzbnd"/>`,
		"fallback": "garden:microphone-fill-20",
	});
}

export default Component;
