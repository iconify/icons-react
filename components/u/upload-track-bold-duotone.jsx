import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/veh0odx2p.css';
import '../../css/w/wpxm9accj.css';
import '../../css/j/jhnvfxetl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="veh0odx2p"/><path class="wpxm9accj"/><path class="jhnvfxetl"/>`,
		"fallback": "solar:upload-track-bold-duotone",
	});
}

export default Component;
