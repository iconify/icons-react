import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh_oxac7w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lh_oxac7w"/>`,
		"fallback": "cib:snapcraft",
	});
}

export default Component;
