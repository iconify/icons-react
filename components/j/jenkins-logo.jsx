import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oa1dgrb5k.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oa1dgrb5k"/>`,
		"fallback": "fluent-mdl2:jenkins-logo",
	});
}

export default Component;
