import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nl8d8wbcz.css';
import '../../css/m/md1p39bnd.css';
import '../../css/w/waflsubxv.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nl8d8wbcz"/><path class="md1p39bnd"/><path class="waflsubxv"/>`,
		"fallback": "tabler-flags:laos",
	});
}

export default Component;
