import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5g9r1bvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s5g9r1bvf"/>`,
		"fallback": "coolicons:table-cells-merge-round",
	});
}

export default Component;
