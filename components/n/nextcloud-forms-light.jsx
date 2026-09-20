import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b59d-rb2y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b59d-rb2y"/>`,
		"fallback": "selfhst:nextcloud-forms-light",
	});
}

export default Component;
