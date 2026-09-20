import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ot0p-jbfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ot0p-jbfn"/>`,
		"fallback": "simple-icons:roamresearch",
	});
}

export default Component;
