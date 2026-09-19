import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4tf1rnas.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4tf1rnas"/>`,
		"fallback": "game-icons:nailed-foot",
	});
}

export default Component;
