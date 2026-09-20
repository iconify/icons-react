import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/regj2beml.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="regj2beml"/>`,
		"fallback": "pinhead:person-kneeling-and-praying",
	});
}

export default Component;
