import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/an70hubtx.css';
import '../../css/o/o4h750biq.css';
import '../../css/k/k5yy91bgj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="an70hubtx"/><path class="o4h750biq"/><path class="k5yy91bgj"/>`,
		"fallback": "selfhst:microsoft-forms-2019-dark",
	});
}

export default Component;
