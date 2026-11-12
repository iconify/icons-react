import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jg_nm4bfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jg_nm4bfn"/>`,
		"fallback": "tabler:link-exclamation",
	});
}

export default Component;
