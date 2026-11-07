import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ziumw9htl.css';
import '../../css/l/ltth4zvne.css';
import '../../css/l/lrv4oobuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ziumw9htl"/><path clip-rule="evenodd" class="ltth4zvne"/><path class="lrv4oobuw"/>`,
		"fallback": "solar:repeat-one-minimalistic-bold-duotone",
	});
}

export default Component;
