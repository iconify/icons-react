import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkl81gx0s.css';
import '../../css/z/zhbt1i4-l.css';
import '../../css/n/nhswtdsta.css';
import '../../css/y/ybvscuusk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="nkl81gx0s"/><path class="zhbt1i4-l"/><path class="nhswtdsta"/><path class="ybvscuusk"/>`,
		"fallback": "selfhst:kapowarr",
	});
}

export default Component;
