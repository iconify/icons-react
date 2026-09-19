import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g74m3rybx.css';
import '../../css/c/cm4vl7bnc.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g74m3rybx"/><path class="cm4vl7bnc"/>`,
		"fallback": "flag:ma-4x3",
	});
}

export default Component;
