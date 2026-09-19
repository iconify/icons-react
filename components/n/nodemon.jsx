import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofnqojbtj.css';
import '../../css/n/nrfjz124s.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofnqojbtj"/><path class="nrfjz124s"/>`,
		"fallback": "devicon:nodemon",
	});
}

export default Component;
