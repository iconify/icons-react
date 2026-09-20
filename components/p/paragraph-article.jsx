import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm53bibrz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vm53bibrz"/>`,
		"fallback": "streamline-sharp-color:paragraph-article",
	});
}

export default Component;
