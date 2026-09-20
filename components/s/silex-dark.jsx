import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/om9141zpw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="om9141zpw"/>`,
		"fallback": "selfhst:silex-dark",
	});
}

export default Component;
