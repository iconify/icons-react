import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-gcgd2xz.css';
import '../../css/s/sqh5tg87y.css';
import '../../css/v/vz_uafqcp.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(.21 -247.01)"><circle class="b-gcgd2xz"/><circle class="sqh5tg87y"/><circle class="vz_uafqcp"/></g>`,
		"fallback": "material-icon-theme:julia",
	});
}

export default Component;
