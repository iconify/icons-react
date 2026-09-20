import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f7v_7vb-u.css';
import '../../css/l/ls6nhvbak.css';
import '../../css/o/o54k0kb2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f7v_7vb-u"/><path class="ls6nhvbak"/><path clip-rule="evenodd" class="o54k0kb2a"/></g>`,
		"fallback": "streamline-sharp-color:theater-mask-flat",
	});
}

export default Component;
