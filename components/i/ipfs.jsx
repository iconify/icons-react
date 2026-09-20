import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgo9_nczw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgo9_nczw"/>`,
		"fallback": "simple-icons:ipfs",
	});
}

export default Component;
