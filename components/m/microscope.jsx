import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iaj2k9b1g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iaj2k9b1g"/>`,
		"fallback": "carbon:microscope",
	});
}

export default Component;
