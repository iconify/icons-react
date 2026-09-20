import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wd_cqqbzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wd_cqqbzt"/>`,
		"fallback": "thesvg:mobx",
	});
}

export default Component;
