import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9481-llz.css';
import '../../css/k/ko8oeoczp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9481-llz"/><path class="ko8oeoczp"/>`,
		"fallback": "selfhst:sonarr-light",
	});
}

export default Component;
