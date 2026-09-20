import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfo0vldli.css';
import '../../css/o/o6jd39oeq.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfo0vldli"/><path class="o6jd39oeq"/>`,
		"fallback": "openmoji:multiply",
	});
}

export default Component;
