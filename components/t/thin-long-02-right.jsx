import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shdnt_bjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shdnt_bjs"/>`,
		"fallback": "ci:thin-long-02-right",
	});
}

export default Component;
