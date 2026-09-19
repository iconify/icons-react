import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dedd0_bzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dedd0_bzk"/>`,
		"fallback": "griddy-icons:png-file",
	});
}

export default Component;
