import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijkhwubvy.css';

const viewBox = {"width":999.978,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijkhwubvy"/>`,
		"fallback": "brandico:skype",
	});
}

export default Component;
