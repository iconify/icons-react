import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xl17irjlu.css';
import '../../css/f/fjge1xbtn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="xl17irjlu"/><path class="fjge1xbtn"/>`,
		"fallback": "selfhst:pulsarr",
	});
}

export default Component;
