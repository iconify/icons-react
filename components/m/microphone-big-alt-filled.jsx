import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvrzt5bkz.css';
import '../../css/s/spys_zb9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvrzt5bkz"/><path class="spys_zb9v"/>`,
		"fallback": "boxicons:microphone-big-alt-filled",
	});
}

export default Component;
