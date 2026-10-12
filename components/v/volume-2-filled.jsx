import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3j0fwjec.css';
import '../../css/o/ou4giibdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3j0fwjec"/><path class="ou4giibdr"/>`,
		"fallback": "lucide-extended:volume-2-filled",
	});
}

export default Component;
