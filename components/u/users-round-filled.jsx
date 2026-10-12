import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntqwcibqp.css';
import '../../css/f/fk05w0vld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntqwcibqp"/><path class="fk05w0vld"/>`,
		"fallback": "lucide-extended:users-round-filled",
	});
}

export default Component;
