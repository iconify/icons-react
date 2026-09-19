import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ho624zber.css';
import '../../css/a/adot17bzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ho624zber"/><path class="adot17bzl"/>`,
		"fallback": "bx:radio-circle-marked",
	});
}

export default Component;
