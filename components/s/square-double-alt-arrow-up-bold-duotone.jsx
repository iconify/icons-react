import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sk8_knd5w.css';
import '../../css/l/lpsml7sns.css';
import '../../css/h/h1p473pfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sk8_knd5w"/><path class="lpsml7sns"/><path class="h1p473pfs"/>`,
		"fallback": "solar:square-double-alt-arrow-up-bold-duotone",
	});
}

export default Component;
