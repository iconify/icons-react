import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hx7ywibap.css';
import '../../css/y/y4--wuesr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hx7ywibap"/><path clip-rule="evenodd" class="y4--wuesr"/>`,
		"fallback": "lucide-extended:panel-bottom-open-filled",
	});
}

export default Component;
