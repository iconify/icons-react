import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxmbj9awl.css';
import '../../css/c/cv0y2ubog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxmbj9awl"/><path class="cv0y2ubog"/>`,
		"fallback": "fontisto:python",
	});
}

export default Component;
