import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smbh6-igf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smbh6-igf"/>`,
		"fallback": "mingcute:sugar-coated-haws-line",
	});
}

export default Component;
