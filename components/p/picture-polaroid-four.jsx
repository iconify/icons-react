import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lpac-9ajf.css';
import '../../css/j/jgqkd-baj.css';
import '../../css/e/emg6eia4o.css';
import '../../css/x/xe-i4bc_y.css';
import '../../css/v/vsk5ec_fm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lpac-9ajf"/><path class="jgqkd-baj"/><path class="emg6eia4o"/><path class="xe-i4bc_y"/><path class="vsk5ec_fm"/></g>`,
		"fallback": "streamline-freehand:picture-polaroid-four",
	});
}

export default Component;
