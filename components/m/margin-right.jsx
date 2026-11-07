import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sn1n_mb6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sn1n_mb6a"/>`,
		"fallback": "vadivam:margin-right",
	});
}

export default Component;
