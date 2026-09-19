import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/au_eukbsr.css';

const viewBox = {"width":450,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="au_eukbsr"/>`,
		"fallback": "file-icons:jest",
	});
}

export default Component;
