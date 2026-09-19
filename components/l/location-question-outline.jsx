import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/be_y6qbvg.css';
import '../../css/m/muhkath4n.css';
import '../../css/b/brfwmjb9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="be_y6qbvg"/><path class="muhkath4n"/><path clip-rule="evenodd" class="brfwmjb9x"/>`,
		"fallback": "basil:location-question-outline",
	});
}

export default Component;
