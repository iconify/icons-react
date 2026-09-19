import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftyrjsbkc.css';
import '../../css/r/rjqqyp-nz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftyrjsbkc"/><path class="rjqqyp-nz"/>`,
		"fallback": "eos-icons:network-file-system-outlined",
	});
}

export default Component;
