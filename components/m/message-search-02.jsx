import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/he_cf3pbt.css';
import '../../css/b/b726t9wba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="he_cf3pbt"/><path class="b726t9wba"/></g>`,
		"fallback": "hugeicons:message-search-02",
	});
}

export default Component;
