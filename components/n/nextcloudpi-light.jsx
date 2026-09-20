import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akmyxebxj.css';
import '../../css/z/zf1qckbeu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="akmyxebxj"/><path clip-rule="evenodd" class="zf1qckbeu"/>`,
		"fallback": "selfhst:nextcloudpi-light",
	});
}

export default Component;
