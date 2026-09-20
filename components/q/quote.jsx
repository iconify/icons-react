import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pk35wmbop.css';

const viewBox = {"width":14,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pk35wmbop"/>`,
		"fallback": "octicon:quote",
	});
}

export default Component;
