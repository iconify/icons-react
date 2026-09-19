import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crdisktkp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crdisktkp"/>`,
		"fallback": "boxicons:table-rows-merge-filled",
	});
}

export default Component;
