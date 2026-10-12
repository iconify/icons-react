import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtsjshfvz.css';
import '../../css/m/m1cu4sbjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mtsjshfvz"/><path class="m1cu4sbjb"/>`,
		"fallback": "lucide-extended:mail-badge-filled",
	});
}

export default Component;
