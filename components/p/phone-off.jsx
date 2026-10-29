import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/znt-8tb8p.css';
import '../../css/k/k9yaaohqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="znt-8tb8p"/><path class="k9yaaohqa wm-s"/></g>`,
		"fallback": "withicons:phone-off",
	});
}

export default Component;
