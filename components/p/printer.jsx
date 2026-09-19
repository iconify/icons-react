import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qz-v_bclj.css';
import '../../css/j/j2g07m_xf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="qz-v_bclj"/><path class="j2g07m_xf"/></g>`,
		"fallback": "charm:printer",
	});
}

export default Component;
