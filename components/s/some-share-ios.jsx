import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlttyjbjw.css';
import '../../css/y/ymagrdb8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nlttyjbjw"/><path class="ymagrdb8e"/>`,
		"fallback": "nrk:some-share-ios",
	});
}

export default Component;
