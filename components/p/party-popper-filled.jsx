import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m71bvmvxt.css';
import '../../css/j/ju3sbspwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m71bvmvxt"/><path class="ju3sbspwg"/>`,
		"fallback": "lucide-extended:party-popper-filled",
	});
}

export default Component;
