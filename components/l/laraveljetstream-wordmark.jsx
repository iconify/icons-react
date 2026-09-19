import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brftz6bit.css';
import '../../css/v/vj7j3db8g.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brftz6bit"/><path class="vj7j3db8g"/>`,
		"fallback": "devicon:laraveljetstream-wordmark",
	});
}

export default Component;
