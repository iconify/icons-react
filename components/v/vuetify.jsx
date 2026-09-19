import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbtl_1ezz.css';
import '../../css/y/y6c1hc4nj.css';
import '../../css/n/ns9a12iaq.css';
import '../../css/z/zm-9z7rwf.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pbtl_1ezz"/><path class="y6c1hc4nj"/><path class="ns9a12iaq"/><path class="zm-9z7rwf"/>`,
		"fallback": "devicon:vuetify",
	});
}

export default Component;
