import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltghsnbbc.css';
import '../../css/s/spcgr69nj.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltghsnbbc"/><path class="spcgr69nj"/>`,
		"fallback": "devicon-plain:premierepro",
	});
}

export default Component;
