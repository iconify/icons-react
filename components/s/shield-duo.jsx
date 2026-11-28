import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyfsf1tvs.css';
import '../../css/a/au3_lid1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qyfsf1tvs secondary"/><path class="au3_lid1s primary"/>`,
		"fallback": "iconaut:shield-duo",
	});
}

export default Component;
