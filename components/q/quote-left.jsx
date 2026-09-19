import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahldpgp5a.css';

const viewBox = {"width":34,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahldpgp5a"/>`,
		"fallback": "fontisto:quote-left",
	});
}

export default Component;
