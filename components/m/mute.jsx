import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t32frmb5j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t32frmb5j"/>`,
		"fallback": "codicon:mute",
	});
}

export default Component;
