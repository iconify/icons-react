import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/ih0qqogqa.css';
import '../../css/f/fh-vz5swt.css';
import '../../css/r/r-77_6bxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ih0qqogqa"/><rect class="fh-vz5swt"/><path class="r-77_6bxd"/></g>`,
		"fallback": "iconoir:microphone-minus",
	});
}

export default Component;
