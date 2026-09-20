import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ca_utkbqg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ca_utkbqg"/>`,
		"fallback": "pinhead:person-dancing-with-person-wearing-dress",
	});
}

export default Component;
