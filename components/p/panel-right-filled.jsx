import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obz4hac9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obz4hac9p"/>`,
		"fallback": "lucide-extended:panel-right-filled",
	});
}

export default Component;
