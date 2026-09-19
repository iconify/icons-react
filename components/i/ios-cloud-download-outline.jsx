import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a66vcju6v.css';
import '../../css/j/jb9r22v3l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a66vcju6v"/><path class="jb9r22v3l"/>`,
		"fallback": "ion:ios-cloud-download-outline",
	});
}

export default Component;
