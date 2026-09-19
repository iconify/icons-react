import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufey87b2o.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufey87b2o"/>`,
		"fallback": "whh:limesurvey",
	});
}

export default Component;
