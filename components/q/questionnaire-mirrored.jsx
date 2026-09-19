import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gs7612cys.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gs7612cys"/>`,
		"fallback": "fluent-mdl2:questionnaire-mirrored",
	});
}

export default Component;
