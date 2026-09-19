import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nw5iff9jp.css';
import '../../css/g/gsktsac_k.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nw5iff9jp"/><path class="gsktsac_k"/>`,
		"fallback": "gis:voronoi-map",
	});
}

export default Component;
