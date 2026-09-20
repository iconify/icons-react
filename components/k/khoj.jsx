import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gsqb4ibam.css';
import '../../css/c/cvq3jvbuv.css';
import '../../css/j/j4gvrkzwf.css';
import '../../css/a/advvqfnsf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gsqb4ibam"/><path class="cvq3jvbuv"/><path class="j4gvrkzwf"/><path class="advvqfnsf"/>`,
		"fallback": "selfhst:khoj",
	});
}

export default Component;
