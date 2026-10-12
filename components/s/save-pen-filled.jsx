import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8cln5bam.css';
import '../../css/j/j0iubn3mf.css';
import '../../css/i/is0qnibip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a8cln5bam"/><path class="j0iubn3mf"/><path class="is0qnibip"/>`,
		"fallback": "lucide-extended:save-pen-filled",
	});
}

export default Component;
