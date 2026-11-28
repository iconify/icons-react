import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6-2db7ux.css';
import '../../css/w/wyrz-1ftw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6-2db7ux secondary"/><path class="primary wyrz-1ftw"/>`,
		"fallback": "iconaut:triangle-right-duo",
	});
}

export default Component;
