import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggfdt95ui.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ggfdt95ui"/>`,
		"fallback": "fad:rew",
	});
}

export default Component;
