import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbrtl5bbj.css';
import '../../css/q/qvl5apb0s.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbrtl5bbj"/><path class="qvl5apb0s"/>`,
		"fallback": "lineicons:timer",
	});
}

export default Component;
