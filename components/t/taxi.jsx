import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jg1wvhb_r.css';
import '../../css/j/j-6v1gb2z.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jg1wvhb_r"/><path class="j-6v1gb2z"/>`,
		"fallback": "lineicons:taxi",
	});
}

export default Component;
