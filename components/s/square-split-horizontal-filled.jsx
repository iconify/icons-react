import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6c5cdb_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6c5cdb_a"/>`,
		"fallback": "lucide-extended:square-split-horizontal-filled",
	});
}

export default Component;
