import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gn9v66zup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gn9v66zup"/>`,
		"fallback": "vadivam:sliders-vertical",
	});
}

export default Component;
