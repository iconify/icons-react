import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bogfzjklk.css';
import '../../css/r/rv75bablh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bogfzjklk"/><path class="rv75bablh"/>`,
		"fallback": "selfhst:weam",
	});
}

export default Component;
