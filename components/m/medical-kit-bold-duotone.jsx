import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vd4e4juil.css';
import '../../css/w/w453hdcek.css';
import '../../css/x/xsk4cbckr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vd4e4juil"/><path class="w453hdcek"/><path clip-rule="evenodd" class="xsk4cbckr"/>`,
		"fallback": "solar:medical-kit-bold-duotone",
	});
}

export default Component;
