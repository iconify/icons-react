import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lr80jrxoc.css';
import '../../css/c/c_321cctz.css';
import '../../css/e/eo8l1gwux.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lr80jrxoc"/><path class="c_321cctz"/><path class="eo8l1gwux"/>`,
		"fallback": "tabler-flags:pacific-community",
	});
}

export default Component;
