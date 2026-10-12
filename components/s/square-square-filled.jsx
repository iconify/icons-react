import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3jnswbyn.css';
import '../../css/a/afwvn4uuu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3jnswbyn"/><path clip-rule="evenodd" class="afwvn4uuu"/>`,
		"fallback": "lucide-extended:square-square-filled",
	});
}

export default Component;
