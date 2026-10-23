import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oc27e2w6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oc27e2w6f"/>`,
		"fallback": "vadivam:nfc",
	});
}

export default Component;
