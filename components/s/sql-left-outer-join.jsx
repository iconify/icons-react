import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ownzj_vcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ownzj_vcj"/>`,
		"fallback": "mdi:sql-left-outer-join",
	});
}

export default Component;
