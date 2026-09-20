import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xhqukj97i.css';
import '../../css/v/vyghxqlem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xhqukj97i"/><path class="vyghxqlem"/></g>`,
		"fallback": "tabler:tag-off",
	});
}

export default Component;
