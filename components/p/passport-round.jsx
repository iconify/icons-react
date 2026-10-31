import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajvl-j2_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajvl-j2_b"/>`,
		"fallback": "coolicons:passport-round",
	});
}

export default Component;
