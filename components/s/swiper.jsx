import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kj481d2gi.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kj481d2gi"/>`,
		"fallback": "devicon:swiper",
	});
}

export default Component;
