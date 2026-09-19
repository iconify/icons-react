import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2wr9wc8g.css';
import '../../css/n/nn222kb7f.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2wr9wc8g"/><path class="nn222kb7f"/>`,
		"fallback": "devicon:openal",
	});
}

export default Component;
