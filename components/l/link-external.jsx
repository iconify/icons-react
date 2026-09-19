import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvi6kbbfc.css';
import '../../css/a/aueya6btf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvi6kbbfc"/><path class="aueya6btf"/>`,
		"fallback": "bx:link-external",
	});
}

export default Component;
