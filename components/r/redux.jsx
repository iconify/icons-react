import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odbl_absp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odbl_absp"/>`,
		"fallback": "file-icons:redux",
	});
}

export default Component;
