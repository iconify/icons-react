import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/l/lh-9sbbli.css';
import '../../css/m/mezxv_whj.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="lh-9sbbli"/><path class="mezxv_whj"/></g>`,
		"fallback": "system-uicons:revert",
	});
}

export default Component;
