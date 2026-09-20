import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogt4byurq.css';

const viewBox = {"width":23,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogt4byurq"/>`,
		"fallback": "material-icon-theme:mathematica",
	});
}

export default Component;
