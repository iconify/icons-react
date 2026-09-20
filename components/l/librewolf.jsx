import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkdzwwbtq.css';
import '../../css/r/rzcvymb5x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="nkdzwwbtq"/><path class="rzcvymb5x"/>`,
		"fallback": "selfhst:librewolf",
	});
}

export default Component;
