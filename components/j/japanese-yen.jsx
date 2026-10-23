import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgcxa8y2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgcxa8y2f"/>`,
		"fallback": "vadivam:japanese-yen",
	});
}

export default Component;
