import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgp3--bdz.css';
import '../../css/v/v_mxp4bup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgp3--bdz"/><path clip-rule="evenodd" class="v_mxp4bup"/>`,
		"fallback": "qlementine-icons:select-all-24",
	});
}

export default Component;
