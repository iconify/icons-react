import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajd5gdbqw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajd5gdbqw"/>`,
		"fallback": "fa-solid:wallet",
	});
}

export default Component;
