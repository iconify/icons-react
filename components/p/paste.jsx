import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cobfg59dr.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cobfg59dr"/>`,
		"fallback": "fa7-regular:paste",
	});
}

export default Component;
