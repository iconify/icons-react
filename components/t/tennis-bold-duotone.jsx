import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vaoa6hbga.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/b/bmthj1_mz.css';
import '../../css/d/dc55cmbks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vaoa6hbga"/><g class="xtpeb-edw"><path class="bmthj1_mz"/><path class="dc55cmbks"/></g>`,
		"fallback": "solar:tennis-bold-duotone",
	});
}

export default Component;
