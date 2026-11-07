import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a501rabcl.css';
import '../../css/b/by_dfvbkj.css';
import '../../css/p/ppn0rybgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a501rabcl"/><path class="by_dfvbkj"/><path clip-rule="evenodd" class="ppn0rybgv"/>`,
		"fallback": "solar:rounded-magnifier-check-outline",
	});
}

export default Component;
