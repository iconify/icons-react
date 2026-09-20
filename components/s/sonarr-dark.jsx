import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfrv3tbut.css';
import '../../css/v/vzh-lybal.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfrv3tbut"/><path class="vzh-lybal"/>`,
		"fallback": "selfhst:sonarr-dark",
	});
}

export default Component;
