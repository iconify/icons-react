import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vu-gg3pdt.css';
import '../../css/m/mk0qhjb2t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vu-gg3pdt"/><path class="mk0qhjb2t"/>`,
		"fallback": "lsicon:report-filled",
	});
}

export default Component;
