import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vyy9a3gfe.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vyy9a3gfe"/>`,
		"fallback": "devicon-plain:rspec-wordmark",
	});
}

export default Component;
