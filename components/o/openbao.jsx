import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/skniqjfmb.css';
import '../../css/d/d6q6fgbmj.css';
import '../../css/t/ts3x6_b7v.css';

const viewBox = {"width":1100,"height":1100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="skniqjfmb"/><path class="d6q6fgbmj"/><path class="ts3x6_b7v"/>`,
		"fallback": "thesvg-color:openbao",
	});
}

export default Component;
