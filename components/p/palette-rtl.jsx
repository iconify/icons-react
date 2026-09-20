import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzwx4mbfz.css';
import '../../css/c/ca-_ht2ki.css';
import '../../css/q/q2m0dq3ja.css';
import '../../css/s/sdoxd1bck.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzwx4mbfz"/><circle class="ca-_ht2ki"/><circle class="q2m0dq3ja"/><circle class="sdoxd1bck"/>`,
		"fallback": "ooui:palette-rtl",
	});
}

export default Component;
