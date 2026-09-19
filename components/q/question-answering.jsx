import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcunifpot.css';
import '../../css/z/zgaui9bdc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcunifpot"/><path class="zgaui9bdc"/>`,
		"fallback": "carbon:question-answering",
	});
}

export default Component;
