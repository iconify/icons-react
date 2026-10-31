import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pk3s6ubsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pk3s6ubsn"/>`,
		"fallback": "vadivam:letter-d",
	});
}

export default Component;
