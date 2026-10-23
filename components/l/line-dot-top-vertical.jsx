import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nchdsi1wk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nchdsi1wk"/>`,
		"fallback": "vadivam:line-dot-top-vertical",
	});
}

export default Component;
