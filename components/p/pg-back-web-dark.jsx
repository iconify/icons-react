import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rr6x52bhh.css';
import '../../css/a/ai5lobbna.css';
import '../../css/t/tkspbcueb.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rr6x52bhh"/><path class="ai5lobbna"/><path class="tkspbcueb"/>`,
		"fallback": "thesvg-color:pg-back-web-dark",
	});
}

export default Component;
