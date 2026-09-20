import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xju_mz_ac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xju_mz_ac"/>`,
		"fallback": "thesvg-color:progate",
	});
}

export default Component;
