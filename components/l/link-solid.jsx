import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6ry8-b9g.css';
import '../../css/t/tyh81m_bt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6ry8-b9g"/><path class="tyh81m_bt"/>`,
		"fallback": "pixel:link-solid",
	});
}

export default Component;
