import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_i1byt2r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r_i1byt2r"/>`,
		"fallback": "streamline-plump:recycle-bin-2-remix",
	});
}

export default Component;
