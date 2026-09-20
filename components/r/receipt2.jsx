import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6g2eix9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6g2eix9p"/>`,
		"fallback": "reicon:receipt2",
	});
}

export default Component;
