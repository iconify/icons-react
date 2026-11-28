import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdcn7f_bq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdcn7f_bq"/>`,
		"fallback": "iconaut:sigma-solid",
	});
}

export default Component;
