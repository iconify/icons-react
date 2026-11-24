import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kr5qu_bcy.css';
import '../../css/d/dnb3cibqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kr5qu_bcy"/><path clip-rule="evenodd" class="dnb3cibqn"/>`,
		"fallback": "lucide-extended:playing-cards-filled",
	});
}

export default Component;
