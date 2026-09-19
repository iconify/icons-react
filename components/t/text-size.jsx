import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hde9zom3i.css';
import '../../css/d/di_8scctl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hde9zom3i"/><path class="di_8scctl"/>`,
		"fallback": "cil:text-size",
	});
}

export default Component;
