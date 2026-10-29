import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vyj-7ezxh.css';
import '../../css/q/q1n0ufkxq.css';
import '../../css/n/nofshwblh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vyj-7ezxh wm-shadow"/><path class="q1n0ufkxq wm-k"/><path class="nofshwblh wm-k"/>`,
		"fallback": "withicons-pastel:minimize",
	});
}

export default Component;
