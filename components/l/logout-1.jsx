import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hxljfzfju.css';
import '../../css/y/y11o17bra.css';
import '../../css/p/prm4c2bvi.css';
import '../../css/u/uhb-smb6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hxljfzfju"/><path class="y11o17bra"/><path class="prm4c2bvi"/><path class="uhb-smb6c"/></g>`,
		"fallback": "streamline-cyber-color:logout-1",
	});
}

export default Component;
