import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vyc35wp7q.css';
import '../../css/p/pappmcc6h.css';
import '../../css/u/uylg6bcvj.css';
import '../../css/b/bamhgjb2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vyc35wp7q"/><path class="pappmcc6h wm-a"/><path class="uylg6bcvj"/><path class="bamhgjb2p wm-a"/></g>`,
		"fallback": "withicons:notepad-text-duo",
	});
}

export default Component;
