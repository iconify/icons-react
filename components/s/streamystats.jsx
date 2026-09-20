import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/des0iyt-k.css';
import '../../css/g/g00svwj5t.css';
import '../../css/q/qqef1qxre.css';
import '../../css/v/vj5p1efoe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="des0iyt-k"/><path class="g00svwj5t"/><path class="qqef1qxre"/><path class="vj5p1efoe"/>`,
		"fallback": "selfhst:streamystats",
	});
}

export default Component;
