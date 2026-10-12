import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqaun74ep.css';
import '../../css/g/gv61adbwm.css';
import '../../css/p/pqeizzbud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqaun74ep"/><path clip-rule="evenodd" class="gv61adbwm"/><path class="pqeizzbud"/>`,
		"fallback": "lucide-extended:map-pin-house-filled",
	});
}

export default Component;
