import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jp6x4fp_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jp6x4fp_r"/>`,
		"fallback": "cbi:ita-airways",
	});
}

export default Component;
