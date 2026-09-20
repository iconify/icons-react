import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pp90ugwwx.css';
import '../../css/x/xli4t7b_v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pp90ugwwx"/><path class="xli4t7b_v"/>`,
		"fallback": "nimbus:transfer-real",
	});
}

export default Component;
