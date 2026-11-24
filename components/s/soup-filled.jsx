import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w09nt7o0v.css';
import '../../css/h/hkt82pb4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w09nt7o0v"/><path class="hkt82pb4f"/>`,
		"fallback": "lucide-extended:soup-filled",
	});
}

export default Component;
