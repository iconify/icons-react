import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vla37tbfm.css';
import '../../css/t/t576d3m0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vla37tbfm"/><path class="t576d3m0f"/>`,
		"fallback": "stash:question-duotone",
	});
}

export default Component;
