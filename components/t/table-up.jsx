import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7_2_dbkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7_2_dbkn"/>`,
		"fallback": "tabler:table-up",
	});
}

export default Component;
