import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/auvv4vosw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="auvv4vosw"/>`,
		"fallback": "streamline-pixel:photography-equipment-film-print",
	});
}

export default Component;
