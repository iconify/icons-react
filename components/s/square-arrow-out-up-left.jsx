import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srlmxbc6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srlmxbc6b"/>`,
		"fallback": "vadivam:square-arrow-out-up-left",
	});
}

export default Component;
