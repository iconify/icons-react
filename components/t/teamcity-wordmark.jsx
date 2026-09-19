import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nl6qsfbub.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nl6qsfbub"/>`,
		"fallback": "devicon-plain:teamcity-wordmark",
	});
}

export default Component;
