import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oik34rbfa.css';
import '../../css/i/ifrdxluft.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oik34rbfa"/><path class="ifrdxluft"/>`,
		"fallback": "devicon-plain:jekyll-wordmark",
	});
}

export default Component;
