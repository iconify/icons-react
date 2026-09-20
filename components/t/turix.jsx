import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cizn9vlgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cizn9vlgt"/>`,
		"fallback": "thesvg:turix",
	});
}

export default Component;
