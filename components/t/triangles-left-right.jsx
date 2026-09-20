import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nflt8sfxw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nflt8sfxw"/>`,
		"fallback": "pinhead:triangles-left-right",
	});
}

export default Component;
