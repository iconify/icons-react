import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vj5eyac4z.css';
import '../../css/g/g11ozeb1b.css';
import '../../css/h/h85-86egj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vj5eyac4z"/><path class="g11ozeb1b"/><path class="h85-86egj"/></g>`,
		"fallback": "tdesign:uninstall",
	});
}

export default Component;
