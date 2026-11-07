import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2v64kbha.css';
import '../../css/i/i-hsyrblc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d2v64kbha"/><path class="i-hsyrblc"/>`,
		"fallback": "solar:tram-bold-duotone",
	});
}

export default Component;
