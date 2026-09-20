import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jerixg-mq.css';
import '../../css/x/x-sfqoban.css';
import '../../css/d/d46zpdbjv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jerixg-mq"/><path class="x-sfqoban"/><path class="d46zpdbjv"/>`,
		"fallback": "selfhst:microsoft-defender-dark",
	});
}

export default Component;
