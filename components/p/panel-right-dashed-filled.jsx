import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jys00cbqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jys00cbqx"/>`,
		"fallback": "lucide-extended:panel-right-dashed-filled",
	});
}

export default Component;
