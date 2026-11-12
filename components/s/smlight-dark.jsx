import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0iipgbww.css';
import '../../css/h/hn4t-7ikp.css';
import '../../css/v/v72q7eb3k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="x0iipgbww"/><circle class="hn4t-7ikp"/><circle class="v72q7eb3k"/>`,
		"fallback": "selfhst:smlight-dark",
	});
}

export default Component;
