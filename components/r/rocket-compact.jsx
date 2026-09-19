import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-5919gss.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-5919gss"/>`,
		"fallback": "codicon:rocket-compact",
	});
}

export default Component;
