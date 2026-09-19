import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlshrtbyk.css';
import '../../css/m/m8-q3inzh.css';
import '../../css/c/c3b89bbrx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlshrtbyk"/><path class="m8-q3inzh"/><path class="c3b89bbrx"/>`,
		"fallback": "ion:ios-podium",
	});
}

export default Component;
