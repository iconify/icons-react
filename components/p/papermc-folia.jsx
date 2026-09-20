import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdvocgpel.css';
import '../../css/f/f8tiq9b2f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdvocgpel"/><path class="f8tiq9b2f"/>`,
		"fallback": "selfhst:papermc-folia",
	});
}

export default Component;
