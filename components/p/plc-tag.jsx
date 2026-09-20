import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u643a_fwx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u643a_fwx"/>`,
		"fallback": "ix:plc-tag",
	});
}

export default Component;
