import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/shs3jubvs.css';
import '../../css/k/kmc13xb3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="shs3jubvs"/><path class="kmc13xb3x"/></g>`,
		"fallback": "streamline-ultimate:sudoku",
	});
}

export default Component;
