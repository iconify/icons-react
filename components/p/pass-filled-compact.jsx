import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgpd84i-o.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tgpd84i-o"/>`,
		"fallback": "codicon:pass-filled-compact",
	});
}

export default Component;
