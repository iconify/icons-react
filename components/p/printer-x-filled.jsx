import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pb1pjibpf.css';
import '../../css/g/g46hbrb1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pb1pjibpf"/><path class="g46hbrb1d"/>`,
		"fallback": "lucide-extended:printer-x-filled",
	});
}

export default Component;
