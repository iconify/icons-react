import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6iikjgcv.css';
import '../../css/x/xyywbacff.css';
import '../../css/g/gshlk4bwd.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/r/r5hp0b4zp.css';
import '../../css/d/dyf_r8bie.css';
import '../../css/z/z-7r0db5x.css';
import '../../css/c/c6q9ly2yv.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="s6iikjgcv"/><path class="xyywbacff"/><path class="gshlk4bwd"/><g class="jn8qy4bru"><path class="r5hp0b4zp"/><path class="dyf_r8bie"/><path class="z-7r0db5x"/><path class="c6q9ly2yv"/></g>`,
		"fallback": "openmoji:money-mouth-face",
	});
}

export default Component;
