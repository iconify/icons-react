import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hg3addbtq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hg3addbtq"/>`,
		"fallback": "pajamas:play",
	});
}

export default Component;
