import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfsw2acuj.css';
import '../../css/o/oiv_48byp.css';
import '../../css/p/pvywatupn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfsw2acuj"/><path class="oiv_48byp"/><path class="pvywatupn"/>`,
		"fallback": "energy-icons:kite-20",
	});
}

export default Component;
