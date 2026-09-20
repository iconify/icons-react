import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2sn25lun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v2sn25lun"/>`,
		"fallback": "reicon:soundwave-circle-filled",
	});
}

export default Component;
