import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oexk_eb8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oexk_eb8w"/>`,
		"fallback": "thesvg:odido",
	});
}

export default Component;
