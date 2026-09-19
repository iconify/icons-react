import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p0x4ts1te.css';
import '../../css/f/ftc5ble5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p0x4ts1te"/><path class="ftc5ble5p"/></g>`,
		"fallback": "iconoir:microscope",
	});
}

export default Component;
