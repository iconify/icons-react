import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5ye4n3wv.css';
import '../../css/f/fr_geojnw.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 p5ye4n3wv"/><path class="clr-i-outline clr-i-outline-path-2 fr_geojnw"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:thumbs-down-line",
	});
}

export default Component;
