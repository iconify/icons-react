import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgsf-tbjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cgsf-tbjo"/>`,
		"fallback": "lucide-extended:panel-top-bottom-dashed-filled",
	});
}

export default Component;
