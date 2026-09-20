import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/af2k9-byt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="af2k9-byt"/>`,
		"fallback": "thesvg-color:openlayers",
	});
}

export default Component;
