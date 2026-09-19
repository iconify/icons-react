import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/v/vi1e7rb5q.css';
import '../../css/l/lncnfvbwz.css';
import '../../css/g/glfhpzbry.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><circle class="vi1e7rb5q"/><circle class="lncnfvbwz"/><path class="glfhpzbry"/></g>`,
		"fallback": "garden:voicemail-fill-16",
	});
}

export default Component;
