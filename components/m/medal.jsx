import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfs19bcvf.css';
import '../../css/a/an4c_3b3j.css';
import '../../css/y/yjo7ewdyq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="xfs19bcvf"/><path class="an4c_3b3j"/><path class="yjo7ewdyq"/>`,
		"fallback": "ion:medal",
	});
}

export default Component;
