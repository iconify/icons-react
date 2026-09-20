import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/a7kvwmrgj.css';
import '../../css/b/bmr1n2fhi.css';
import '../../css/d/d1qde5res.css';
import '../../css/a/ai5b7_bas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="a7kvwmrgj"/><path class="bmr1n2fhi"/><path class="d1qde5res"/><path class="ai5b7_bas"/></g>`,
		"fallback": "streamline-freehand-color:video-player-movie",
	});
}

export default Component;
