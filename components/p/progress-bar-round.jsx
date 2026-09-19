import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixz9bpndl.css';
import '../../css/b/bqehyh14p.css';
import '../../css/s/svdy80z7e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixz9bpndl"/><path class="bqehyh14p"/><path class="svdy80z7e"/>`,
		"fallback": "carbon:progress-bar-round",
	});
}

export default Component;
