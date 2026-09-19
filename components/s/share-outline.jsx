import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lun5-dx1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lun5-dx1a"/>`,
		"fallback": "eva:share-outline",
	});
}

export default Component;
