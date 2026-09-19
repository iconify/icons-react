import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sp_j_6pys.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sp_j_6pys"/>`,
		"fallback": "dashicons:table-row-delete",
	});
}

export default Component;
