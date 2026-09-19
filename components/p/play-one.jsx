import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nclcvn-dr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nclcvn-dr"/>`,
		"fallback": "icon-park:play-one",
	});
}

export default Component;
