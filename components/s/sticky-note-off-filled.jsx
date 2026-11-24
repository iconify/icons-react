import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhugqhbem.css';
import '../../css/c/ct2edwbld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhugqhbem"/><path class="ct2edwbld"/>`,
		"fallback": "lucide-extended:sticky-note-off-filled",
	});
}

export default Component;
