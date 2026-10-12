import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwosufbcj.css';
import '../../css/r/re3b6ubpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwosufbcj"/><path class="re3b6ubpp"/>`,
		"fallback": "lucide-extended:soup-filled",
	});
}

export default Component;
