import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec0legbxk.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec0legbxk"/>`,
		"fallback": "gis:landcover-map",
	});
}

export default Component;
