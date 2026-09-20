import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijmbp0vus.css';
import '../../css/t/td80pac2f.css';
import '../../css/h/h38q_tbmo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijmbp0vus"/><path class="td80pac2f"/><path class="h38q_tbmo"/>`,
		"fallback": "selfhst:marp",
	});
}

export default Component;
