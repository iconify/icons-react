import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljdfx9b4i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljdfx9b4i"/>`,
		"fallback": "selfhst:nextcloud-office-document-light",
	});
}

export default Component;
