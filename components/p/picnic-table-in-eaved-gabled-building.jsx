import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_bwp5i_z.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_bwp5i_z"/>`,
		"fallback": "pinhead:picnic-table-in-eaved-gabled-building",
	});
}

export default Component;
