import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8cln5bam.css';
import '../../css/u/uu3z8f28g.css';
import '../../css/w/w42ds020q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a8cln5bam"/><path class="uu3z8f28g"/><path class="w42ds020q"/>`,
		"fallback": "lucide-extended:save-pen-filled",
	});
}

export default Component;
