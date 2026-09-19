import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfeae2iuo.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfeae2iuo"/>`,
		"fallback": "gis:split-polygon",
	});
}

export default Component;
