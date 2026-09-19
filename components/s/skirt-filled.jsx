import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m35y46lhd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m35y46lhd"/>`,
		"fallback": "boxicons:skirt-filled",
	});
}

export default Component;
