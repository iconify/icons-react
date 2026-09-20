import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/loar4lb6y.css';
import '../../css/s/ssyq7c48j.css';
import '../../css/w/wyzkygbfw.css';
import '../../css/b/bt5h53nxb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="loar4lb6y"/><path class="ssyq7c48j"/><path class="wyzkygbfw"/><path class="bt5h53nxb"/>`,
		"fallback": "selfhst:servarr",
	});
}

export default Component;
