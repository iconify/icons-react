import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yh6d2wb4r.css';
import '../../css/a/aqx98_b2v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yh6d2wb4r"/><path class="aqx98_b2v"/>`,
		"fallback": "material-icon-theme:storybook",
	});
}

export default Component;
