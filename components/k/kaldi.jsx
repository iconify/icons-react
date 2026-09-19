import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1soy6buh.css';
import '../../css/c/cbl4o-biw.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1soy6buh"/><path class="cbl4o-biw"/>`,
		"fallback": "devicon:kaldi",
	});
}

export default Component;
