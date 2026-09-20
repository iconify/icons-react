import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_ds3ebdl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v_ds3ebdl"/>`,
		"fallback": "ix:shield",
	});
}

export default Component;
