import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oir8vpbxa.css';
import '../../css/c/cpcvcqb5t.css';
import '../../css/w/w-o1zsb7d.css';
import '../../css/i/io9dsz-xx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oir8vpbxa wm-a"/><path class="cpcvcqb5t wm-a"/><path class="w-o1zsb7d wm-k"/><path class="io9dsz-xx wm-k"/>`,
		"fallback": "withicons-bauhaus:medal",
	});
}

export default Component;
