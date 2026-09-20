import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ratvl3qmf.css';
import '../../css/y/yptkabw6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ratvl3qmf"/><path class="yptkabw6o"/></g>`,
		"fallback": "lets-icons:lock-alt-duotone",
	});
}

export default Component;
