import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yy02zzwnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yy02zzwnw"/>`,
		"fallback": "reicon:stars",
	});
}

export default Component;
