import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqpralk8i.css';
import '../../css/r/rfhud25gy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqpralk8i"/><path class="rfhud25gy"/>`,
		"fallback": "energy-icons:tower-section-20",
	});
}

export default Component;
