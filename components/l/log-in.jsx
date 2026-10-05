import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/f/fn3g3ebng.css';
import '../../css/e/enrflx9dd.css';
import '../../css/g/gtw2eeblb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="fn3g3ebng"/><path class="enrflx9dd"/><path class="gtw2eeblb"/></g>`,
		"fallback": "matita:log-in",
	});
}

export default Component;
