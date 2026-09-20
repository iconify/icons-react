import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aueef1qey.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aueef1qey"/>`,
		"fallback": "wpf:medical-doctor",
	});
}

export default Component;
