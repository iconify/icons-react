import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0prurl7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g0prurl7y"/>`,
		"fallback": "vadivam:panel-left-dashed",
	});
}

export default Component;
