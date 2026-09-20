import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcd13orep.css';
import '../../css/z/zs9x5hotx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcd13orep"/><path class="zs9x5hotx"/>`,
		"fallback": "selfhst:mongodb-light",
	});
}

export default Component;
