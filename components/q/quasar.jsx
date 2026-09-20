import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/doy7itbjk.css';

const viewBox = {"width":50.843,"height":50.843};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="doy7itbjk"/>`,
		"fallback": "material-icon-theme:quasar",
	});
}

export default Component;
