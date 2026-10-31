import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ee582qb8o.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ee582qb8o"/>`,
		"fallback": "pinhead:picnic-table-in-eaved-gabled-shelter",
	});
}

export default Component;
