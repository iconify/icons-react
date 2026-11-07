import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_8azubyy.css';
import '../../css/u/ur2-jsh4j.css';
import '../../css/t/te90o_idu.css';
import '../../css/y/y3kxq9bxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k_8azubyy"/><path clip-rule="evenodd" class="ur2-jsh4j"/><path class="te90o_idu"/><path clip-rule="evenodd" class="y3kxq9bxl"/>`,
		"fallback": "solar:pin-list-bold",
	});
}

export default Component;
