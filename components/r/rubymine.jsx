import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gti5d3bfu.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gti5d3bfu"/>`,
		"fallback": "devicon-plain:rubymine",
	});
}

export default Component;
