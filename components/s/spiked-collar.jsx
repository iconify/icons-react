import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wa_radcde.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wa_radcde"/>`,
		"fallback": "game-icons:spiked-collar",
	});
}

export default Component;
