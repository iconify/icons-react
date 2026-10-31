import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1xiqqxwq.css';
import '../../css/u/uiavscbxc.css';
import '../../css/p/p_qrzz42h.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1xiqqxwq"/><path class="uiavscbxc"/><path class="p_qrzz42h"/>`,
		"fallback": "tabler-flags:pakistan",
	});
}

export default Component;
