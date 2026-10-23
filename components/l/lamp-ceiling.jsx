import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aty9q57nw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aty9q57nw"/>`,
		"fallback": "vadivam:lamp-ceiling",
	});
}

export default Component;
