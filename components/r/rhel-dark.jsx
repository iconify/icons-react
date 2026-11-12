import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vug20nb6u.css';
import '../../css/c/cfm66s3uf.css';
import '../../css/b/bfjbb2-nr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vug20nb6u"/><path class="cfm66s3uf"/><path class="bfjbb2-nr"/>`,
		"fallback": "selfhst:rhel-dark",
	});
}

export default Component;
