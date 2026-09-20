import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5uvpgbez.css';
import '../../css/h/h_pt1abna.css';
import '../../css/h/hlibxwb-i.css';
import '../../css/e/e4zfowz9r.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5uvpgbez"/><path class="h_pt1abna"/><path class="hlibxwb-i"/><path class="e4zfowz9r"/>`,
		"fallback": "openmoji:libra",
	});
}

export default Component;
