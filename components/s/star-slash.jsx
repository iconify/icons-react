import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qm5trfjdt.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qm5trfjdt"/>`,
		"fallback": "f7:star-slash",
	});
}

export default Component;
