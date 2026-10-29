import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5d53x3ua.css';
import '../../css/s/s8qbt4dvj.css';
import '../../css/z/zsvj6acrk.css';
import '../../css/b/b0i5739ts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5d53x3ua"/><path class="s8qbt4dvj"/><path class="zsvj6acrk"/><path class="b0i5739ts"/>`,
		"fallback": "withicons-bauhaus:megaphone",
	});
}

export default Component;
