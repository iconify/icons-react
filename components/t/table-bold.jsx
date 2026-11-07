import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2937lufr.css';
import '../../css/v/vz7kdz1fb.css';
import '../../css/z/z1-af-bwe.css';
import '../../css/y/yiagsukzx.css';
import '../../css/f/fsm6edcal.css';
import '../../css/c/chnbh0b2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2937lufr"/><path class="vz7kdz1fb"/><path class="z1-af-bwe"/><path class="yiagsukzx"/><path class="fsm6edcal"/><path class="chnbh0b2d"/>`,
		"fallback": "solar:table-bold",
	});
}

export default Component;
