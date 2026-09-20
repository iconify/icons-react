import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdqeqcb-j.css';
import '../../css/v/v61rn0vbp.css';
import '../../css/p/pk7vzlmko.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdqeqcb-j"/><path class="v61rn0vbp"/><path class="pk7vzlmko"/>`,
		"fallback": "selfhst:lingva-translate",
	});
}

export default Component;
