import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vj9wi1brp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vj9wi1brp"/>`,
		"fallback": "streamline:signal-low-remix",
	});
}

export default Component;
