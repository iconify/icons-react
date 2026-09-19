import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cf_am2bfl.css';

const viewBox = {"width":460,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cf_am2bfl"/>`,
		"fallback": "file-icons:mruby",
	});
}

export default Component;
