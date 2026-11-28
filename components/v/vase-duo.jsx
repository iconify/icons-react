import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqs6jwblf.css';
import '../../css/i/i2jdkabow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqs6jwblf secondary"/><path class="i2jdkabow primary"/>`,
		"fallback": "iconaut:vase-duo",
	});
}

export default Component;
