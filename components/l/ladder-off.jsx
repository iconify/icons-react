import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eie6a02dw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eie6a02dw"/>`,
		"fallback": "tabler:ladder-off",
	});
}

export default Component;
