import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/un0klbcmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="un0klbcmx"/>`,
		"fallback": "tabler:pool",
	});
}

export default Component;
