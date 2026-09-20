import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y9qom6bss.css';
import '../../css/d/dfkw86g2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="y9qom6bss"/><path class="dfkw86g2b"/></g>`,
		"fallback": "lets-icons:upload-duotone",
	});
}

export default Component;
