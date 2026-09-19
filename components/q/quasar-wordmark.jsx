import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1o-oykdy.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c1o-oykdy"/>`,
		"fallback": "devicon-plain:quasar-wordmark",
	});
}

export default Component;
