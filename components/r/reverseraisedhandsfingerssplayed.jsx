import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fex8l3b8p.css';
import '../../css/r/rw715wbnw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fex8l3b8p"/><path class="rw715wbnw"/>`,
		"fallback": "fxemoji:reverseraisedhandsfingerssplayed",
	});
}

export default Component;
