import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pc7r85hdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pc7r85hdd primary"/>`,
		"fallback": "iconaut:spool-duotone",
	});
}

export default Component;
