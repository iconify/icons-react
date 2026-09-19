import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trfw2zy9j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="trfw2zy9j"/>`,
		"fallback": "healthicons:sonogram-outline",
	});
}

export default Component;
