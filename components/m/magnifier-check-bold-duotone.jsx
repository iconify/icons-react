import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwqarthoa.css';
import '../../css/f/frxk7_buw.css';
import '../../css/y/yrnx5ea_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwqarthoa"/><path class="frxk7_buw"/><path class="yrnx5ea_v"/>`,
		"fallback": "solar:magnifier-check-bold-duotone",
	});
}

export default Component;
