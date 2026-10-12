import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h4z46wbrw.css';
import '../../css/h/hbhcawbze.css';
import '../../css/k/ki116tb0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h4z46wbrw"/><path class="hbhcawbze"/><path class="ki116tb0r"/></g>`,
		"fallback": "lucide-extended:volume-2-duotone",
	});
}

export default Component;
