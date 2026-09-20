import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptf8xy91h.css';
import '../../css/m/m5ugsmtmc.css';
import '../../css/x/xwycoosoa.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptf8xy91h"/><path class="m5ugsmtmc"/><circle class="xwycoosoa"/>`,
		"fallback": "material-icon-theme:pawn",
	});
}

export default Component;
