import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oci2gci4n.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oci2gci4n"/>`,
		"fallback": "dinkie-icons:unsplash-filled",
	});
}

export default Component;
