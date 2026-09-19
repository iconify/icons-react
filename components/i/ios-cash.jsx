import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_1hnfwlj.css';
import '../../css/m/m50re4ijw.css';
import '../../css/o/okx3-dbox.css';
import '../../css/a/axr2tcbfl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_1hnfwlj"/><path class="m50re4ijw"/><path class="okx3-dbox"/><circle class="axr2tcbfl"/>`,
		"fallback": "ion:ios-cash",
	});
}

export default Component;
