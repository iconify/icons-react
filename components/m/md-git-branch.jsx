import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcvd2fbgz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mcvd2fbgz"/>`,
		"fallback": "ion:md-git-branch",
	});
}

export default Component;
