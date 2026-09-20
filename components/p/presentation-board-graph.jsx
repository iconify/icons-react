import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mgyuz2oym.css';
import '../../css/z/z7seoxqig.css';
import '../../css/g/gp8hu3blm.css';
import '../../css/y/yibdh2wpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mgyuz2oym"/><path class="z7seoxqig"/><path class="gp8hu3blm"/><path class="yibdh2wpn"/></g>`,
		"fallback": "streamline-ultimate-color:presentation-board-graph",
	});
}

export default Component;
