import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vvs2ubbmn.css';
import '../../css/a/au4p_eikh.css';
import '../../css/o/ovxbe7lut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vvs2ubbmn"/><path class="au4p_eikh"/><path class="ovxbe7lut"/></g>`,
		"fallback": "streamline-ultimate-color:typing",
	});
}

export default Component;
