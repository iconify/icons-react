import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwibtjb4r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uwibtjb4r"/>`,
		"fallback": "gravity-ui:person-nut-hex",
	});
}

export default Component;
