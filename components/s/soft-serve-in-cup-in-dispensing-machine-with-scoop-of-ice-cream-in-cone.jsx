import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcw2bfu7k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcw2bfu7k"/>`,
		"fallback": "pinhead:soft-serve-in-cup-in-dispensing-machine-with-scoop-of-ice-cream-in-cone",
	});
}

export default Component;
