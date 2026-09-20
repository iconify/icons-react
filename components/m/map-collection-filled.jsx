import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j25hdxidg.css';
import '../../css/e/esl7uqcwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j25hdxidg"/><path class="esl7uqcwy"/>`,
		"fallback": "tdesign:map-collection-filled",
	});
}

export default Component;
