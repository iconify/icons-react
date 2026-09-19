import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smx2kur-u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="smx2kur-u"/>`,
		"fallback": "gravity-ui:paperclip",
	});
}

export default Component;
