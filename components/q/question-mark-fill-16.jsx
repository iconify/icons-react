import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sq89r7b6w.css';
import '../../css/x/x_8ggbcrp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="sq89r7b6w"/><path class="x_8ggbcrp"/>`,
		"fallback": "garden:question-mark-fill-16",
	});
}

export default Component;
