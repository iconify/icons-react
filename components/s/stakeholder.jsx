import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwtk9abju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwtk9abju"/>`,
		"fallback": "grommet-icons:stakeholder",
	});
}

export default Component;
