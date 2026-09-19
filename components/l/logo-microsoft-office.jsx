import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ysbdvk_2o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ysbdvk_2o"/>`,
		"fallback": "gravity-ui:logo-microsoft-office",
	});
}

export default Component;
