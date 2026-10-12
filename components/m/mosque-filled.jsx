import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oonz2hbnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oonz2hbnj"/>`,
		"fallback": "lucide-extended:mosque-filled",
	});
}

export default Component;
