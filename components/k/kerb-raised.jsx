import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w59onrtks.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w59onrtks"/>`,
		"fallback": "pinhead:kerb-raised",
	});
}

export default Component;
