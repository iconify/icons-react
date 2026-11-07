import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2wfgcisw.css';
import '../../css/n/nvyceb_wh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i2wfgcisw"/><path class="nvyceb_wh"/>`,
		"fallback": "solar:undo-right-round-bold-duotone",
	});
}

export default Component;
