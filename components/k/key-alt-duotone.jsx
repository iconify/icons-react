import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fjiz8hbrl.css';
import '../../css/r/rxa1r_t5i.css';
import '../../css/h/h5_ubqi0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fjiz8hbrl"/><circle class="rxa1r_t5i"/><path class="h5_ubqi0k"/></g>`,
		"fallback": "lets-icons:key-alt-duotone",
	});
}

export default Component;
