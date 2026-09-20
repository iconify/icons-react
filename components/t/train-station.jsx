import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnjk4qv4f.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnjk4qv4f"/>`,
		"fallback": "map:train-station",
	});
}

export default Component;
