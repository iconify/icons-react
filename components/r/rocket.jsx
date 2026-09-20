import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/m_makfbdj.css';
import '../../css/m/m2504i8sf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="m_makfbdj"/><path class="m2504i8sf"/></g>`,
		"fallback": "mage:rocket",
	});
}

export default Component;
