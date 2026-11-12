import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzhi-ac4k.css';
import '../../css/c/ck99yo6hz.css';
import '../../css/g/gqyaulbpw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzhi-ac4k"/><path class="ck99yo6hz"/><path class="gqyaulbpw"/>`,
		"fallback": "selfhst:microsoft-powerpoint-light",
	});
}

export default Component;
