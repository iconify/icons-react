import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgfhitvgx.css';
import '../../css/w/wup9lynlc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgfhitvgx"/><path class="wup9lynlc"/>`,
		"fallback": "catppuccin:security",
	});
}

export default Component;
