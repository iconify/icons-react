import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bf-mlm0al.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bf-mlm0al"/>`,
		"fallback": "selfhst:smartfox-dark",
	});
}

export default Component;
