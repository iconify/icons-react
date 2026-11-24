import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrlnyzn3k.css';
import '../../css/z/z3hyr2b6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrlnyzn3k"/><path class="z3hyr2b6a"/>`,
		"fallback": "lucide-extended:radio-filled",
	});
}

export default Component;
