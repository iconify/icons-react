import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sp60bbcrp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sp60bbcrp"/>`,
		"fallback": "gravity-ui:logo-debian",
	});
}

export default Component;
