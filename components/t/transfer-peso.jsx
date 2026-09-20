import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xli4t7b_v.css';
import '../../css/d/dwyzddbwc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xli4t7b_v"/><path class="dwyzddbwc"/>`,
		"fallback": "nimbus:transfer-peso",
	});
}

export default Component;
