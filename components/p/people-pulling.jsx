import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybkgz038y.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybkgz038y"/>`,
		"fallback": "fa6-solid:people-pulling",
	});
}

export default Component;
