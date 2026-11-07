import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm03gzbnp.css';
import '../../css/k/kenq7me_r.css';
import '../../css/n/nyk3gvctb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm03gzbnp"/><path class="kenq7me_r"/><path class="nyk3gvctb"/>`,
		"fallback": "solar:move-square-bold-duotone",
	});
}

export default Component;
