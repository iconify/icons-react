import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jka59sbfy.css';
import '../../css/s/syimw_bzt.css';
import '../../css/y/yeqou0bji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jka59sbfy"/><path class="syimw_bzt"/><path class="yeqou0bji"/>`,
		"fallback": "token:trava",
	});
}

export default Component;
