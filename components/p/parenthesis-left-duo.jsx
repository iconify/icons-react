import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ug2zzqy7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ug2zzqy7b"/>`,
		"fallback": "iconaut:parenthesis-left-duo",
	});
}

export default Component;
