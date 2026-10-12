import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4-njpbvj.css';
import '../../css/i/ity428tdo.css';
import '../../css/p/pembsco1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l4-njpbvj"/><path class="ity428tdo"/><path class="pembsco1c"/>`,
		"fallback": "lucide-extended:radio-tower-filled",
	});
}

export default Component;
