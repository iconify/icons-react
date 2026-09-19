import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkqn7xbch.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkqn7xbch"/>`,
		"fallback": "whh:squareq",
	});
}

export default Component;
