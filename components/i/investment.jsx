import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9cib2wjc.css';
import '../../css/r/reay3euxf.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9cib2wjc"/><path class="reay3euxf"/>`,
		"fallback": "lineicons:investment",
	});
}

export default Component;
