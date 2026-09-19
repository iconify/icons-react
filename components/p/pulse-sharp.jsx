import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fspygp3li.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fspygp3li"/>`,
		"fallback": "ion:pulse-sharp",
	});
}

export default Component;
