import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzdld6fdb.css';
import '../../css/a/a1kinh57h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzdld6fdb"/><circle class="a1kinh57h"/>`,
		"fallback": "carbon:vlan-ibm",
	});
}

export default Component;
