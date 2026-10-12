import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6wtvyb2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d6wtvyb2n"/>`,
		"fallback": "lucide-extended:panel-top-dashed-filled",
	});
}

export default Component;
