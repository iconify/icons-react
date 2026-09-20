import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xt0grkbak.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xt0grkbak"/>`,
		"fallback": "pinhead:tram-track-crossing-solid-line",
	});
}

export default Component;
