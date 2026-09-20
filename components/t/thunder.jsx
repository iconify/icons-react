import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqdup5oyd.css';
import '../../css/a/a3yzckbwx.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqdup5oyd"/><path class="a3yzckbwx"/>`,
		"fallback": "lineicons:thunder",
	});
}

export default Component;
