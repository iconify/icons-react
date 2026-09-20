import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a21bjysuj.css';
import '../../css/t/tm-9qcpcq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="a21bjysuj"/><path class="tm-9qcpcq"/>`,
		"fallback": "selfhst:scrypted",
	});
}

export default Component;
