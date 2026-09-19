import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nib94r23y.css';
import '../../css/t/tp8s31b8f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nib94r23y"/><path class="tp8s31b8f"/>`,
		"fallback": "famicons:return-up-forward",
	});
}

export default Component;
