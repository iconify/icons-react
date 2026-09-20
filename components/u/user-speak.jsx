import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mh26g7bii.css';
import '../../css/w/wsqxpmcli.css';
import '../../css/g/gri55clhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mh26g7bii"/><path clip-rule="evenodd" class="wsqxpmcli"/><path class="gri55clhf"/></g>`,
		"fallback": "reicon:user-speak",
	});
}

export default Component;
