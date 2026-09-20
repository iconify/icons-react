import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rbliukcje.css';
import '../../css/s/suo3rkklt.css';
import '../../css/v/v05-n5bad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rbliukcje"/><path class="suo3rkklt"/><path class="v05-n5bad"/></g>`,
		"fallback": "streamline-freehand-color:keyboard-eject-button",
	});
}

export default Component;
