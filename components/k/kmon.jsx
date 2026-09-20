import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awy6hv8rm.css';
import '../../css/x/xxg6e85ro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awy6hv8rm"/><path class="xxg6e85ro"/>`,
		"fallback": "token:kmon",
	});
}

export default Component;
