import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/veaxrgwgs.css';
import '../../css/o/op-da8bcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="veaxrgwgs"/><path clip-rule="evenodd" class="op-da8bcv"/>`,
		"fallback": "lucide-extended:square-pilcrow-filled",
	});
}

export default Component;
