import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlf6_vbtf.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlf6_vbtf"/>`,
		"fallback": "map:playground",
	});
}

export default Component;
