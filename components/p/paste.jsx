import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jre1oib0e.css';
import '../../css/v/vdbqspb8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jre1oib0e"/><path class="vdbqspb8v"/>`,
		"fallback": "bxs:paste",
	});
}

export default Component;
