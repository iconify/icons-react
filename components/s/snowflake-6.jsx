import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_3llnbzb.css';

const viewBox = {"width":21,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_3llnbzb"/>`,
		"fallback": "fontisto:snowflake-6",
	});
}

export default Component;
