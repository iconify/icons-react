import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqkctdb_g.css';
import '../../css/c/cvlo2iq2m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqkctdb_g"/><path class="cvlo2iq2m"/>`,
		"fallback": "carbon:sim-card",
	});
}

export default Component;
