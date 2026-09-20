import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/tlp1ly5bq.css';
import '../../css/j/jwdly1b6j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="tlp1ly5bq"/><path class="jwdly1b6j"/></g>`,
		"fallback": "streamline:play-list-folder",
	});
}

export default Component;
