import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pks9adckk.css';

const viewBox = {"width":1536,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pks9adckk"/>`,
		"fallback": "fa:music",
	});
}

export default Component;
