import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebt6dfb6z.css';
import '../../css/m/mpz6u0b-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebt6dfb6z"/><path class="mpz6u0b-o"/>`,
		"fallback": "lucide-extended:radio-filled",
	});
}

export default Component;
