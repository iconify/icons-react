import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnv_ckbjc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cnv_ckbjc"/>`,
		"fallback": "codicon:megaphone",
	});
}

export default Component;
