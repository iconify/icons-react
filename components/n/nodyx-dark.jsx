import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hoz0x3i9y.css';
import '../../css/c/c2l-kjb0w.css';
import '../../css/f/f3odz3d8a.css';
import '../../css/i/i130hcb9f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hoz0x3i9y"/><circle class="c2l-kjb0w"/><path class="f3odz3d8a"/><path class="i130hcb9f"/>`,
		"fallback": "selfhst:nodyx-dark",
	});
}

export default Component;
