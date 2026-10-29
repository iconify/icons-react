import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccdihcchd.css';
import '../../css/n/nxxqhr_ns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccdihcchd"/><path class="nxxqhr_ns"/>`,
		"fallback": "withicons-bauhaus:star",
	});
}

export default Component;
