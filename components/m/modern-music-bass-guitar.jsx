import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/ulc51o2rw.css';
import '../../css/v/v0ls27beq.css';
import '../../css/n/n_wwbdbeo.css';
import '../../css/x/xeu9bf56s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ulc51o2rw"/><path class="v0ls27beq"/><path class="n_wwbdbeo"/><path class="xeu9bf56s"/></g>`,
		"fallback": "streamline-freehand-color:modern-music-bass-guitar",
	});
}

export default Component;
