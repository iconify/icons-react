import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t46oz2bvl.css';
import '../../css/j/j4v_2dxrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t46oz2bvl"/><path clip-rule="evenodd" class="j4v_2dxrd"/>`,
		"fallback": "lucide-extended:monitor-stop-filled",
	});
}

export default Component;
