import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/m/mnlfd9btk.css';
import '../../css/w/wakqt4bsh.css';
import '../../css/v/v_wmkzbwx.css';
import '../../css/v/vds-qfbri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="mnlfd9btk wm-shadow"/><path class="wakqt4bsh wm-shadow"/><path class="v_wmkzbwx"/><path class="vds-qfbri"/></g>`,
		"fallback": "withicons-brutal:redo",
	});
}

export default Component;
