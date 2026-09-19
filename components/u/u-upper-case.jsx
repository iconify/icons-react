import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trio7-bfw.css';

const viewBox = {"width":527,"height":754};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trio7-bfw"/>`,
		"fallback": "ls:u-upper-case",
	});
}

export default Component;
