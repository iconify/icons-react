import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttp_dcczj.css';
import '../../css/p/p4-iowb1v.css';
import '../../css/u/u3rxtwnen.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttp_dcczj"/><path class="p4-iowb1v"/><path clip-rule="evenodd" class="u3rxtwnen"/>`,
		"fallback": "qlementine-icons:resume-16",
	});
}

export default Component;
