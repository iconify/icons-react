import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s9iml0b6q.css';
import '../../css/q/qw743lyij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s9iml0b6q"/><path class="qw743lyij"/></g>`,
		"fallback": "lucide-extended:spray-can-duotone",
	});
}

export default Component;
