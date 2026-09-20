import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2ebknbcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2ebknbcf"/>`,
		"fallback": "tabler:plug-connected-x",
	});
}

export default Component;
