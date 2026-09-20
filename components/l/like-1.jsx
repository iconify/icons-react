import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lobpfqb2f.css';
import '../../css/h/h79p-pb0n.css';
import '../../css/l/lo4c4xv9d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lobpfqb2f"/><path class="h79p-pb0n"/><path class="lo4c4xv9d"/></g>`,
		"fallback": "streamline-flex-color:like-1",
	});
}

export default Component;
