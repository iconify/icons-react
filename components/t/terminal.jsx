import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmx2awujk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmx2awujk"/>`,
		"fallback": "bxs:terminal",
	});
}

export default Component;
