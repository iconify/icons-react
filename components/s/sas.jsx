import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9cgckbcm.css';

const viewBox = {"width":342,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9cgckbcm"/>`,
		"fallback": "file-icons:sas",
	});
}

export default Component;
