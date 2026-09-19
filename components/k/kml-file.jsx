import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y43w1h50n.css';
import '../../css/j/jqc7hmb-f.css';
import '../../css/x/x2bi_jl-x.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y43w1h50n"/><path class="jqc7hmb-f"/><path class="x2bi_jl-x"/>`,
		"fallback": "gis:kml-file",
	});
}

export default Component;
