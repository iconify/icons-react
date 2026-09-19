import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6xiyt8wv.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6xiyt8wv"/>`,
		"fallback": "codicon:remote-compact",
	});
}

export default Component;
