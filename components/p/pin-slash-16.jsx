import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drhwmzukw.css';
import '../../css/n/noii36_6j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drhwmzukw"/><path class="noii36_6j"/>`,
		"fallback": "octicon:pin-slash-16",
	});
}

export default Component;
