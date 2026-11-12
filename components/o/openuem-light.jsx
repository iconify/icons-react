import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h568fcbae.css';
import '../../css/x/x1ipfizhl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="h568fcbae"/><path class="x1ipfizhl"/>`,
		"fallback": "selfhst:openuem-light",
	});
}

export default Component;
