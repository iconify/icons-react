import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpcmcruxl.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpcmcruxl"/>`,
		"fallback": "fa6-solid:person-pregnant",
	});
}

export default Component;
