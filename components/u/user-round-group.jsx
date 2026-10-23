import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/suiwf7gvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="suiwf7gvk"/>`,
		"fallback": "vadivam:user-round-group",
	});
}

export default Component;
