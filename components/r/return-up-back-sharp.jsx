import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhqdc85vd.css';
import '../../css/c/ceke74b9i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhqdc85vd"/><path class="ceke74b9i"/>`,
		"fallback": "famicons:return-up-back-sharp",
	});
}

export default Component;
