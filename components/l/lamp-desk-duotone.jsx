import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m578dxb1e.css';
import '../../css/m/mlhz2kbie.css';
import '../../css/k/kocu-gbtd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m578dxb1e"/><path class="mlhz2kbie"/><path class="kocu-gbtd"/></g>`,
		"fallback": "lucide-extended:lamp-desk-duotone",
	});
}

export default Component;
