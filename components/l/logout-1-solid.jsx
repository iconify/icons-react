import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hltb_3h3y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hltb_3h3y"/>`,
		"fallback": "streamline-flex:logout-1-solid",
	});
}

export default Component;
