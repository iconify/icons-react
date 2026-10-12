import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z32nf-brq.css';
import '../../css/h/h48_73b8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z32nf-brq"/><path clip-rule="evenodd" class="h48_73b8g"/>`,
		"fallback": "lucide-extended:tractor-filled",
	});
}

export default Component;
