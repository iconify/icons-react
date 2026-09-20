import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tj9892bvm.css';
import '../../css/w/wo110wbto.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tj9892bvm"/><path class="wo110wbto"/>`,
		"fallback": "openmoji:minus",
	});
}

export default Component;
