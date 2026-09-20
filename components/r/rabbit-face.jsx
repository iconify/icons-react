import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmccj8tio.css';
import '../../css/f/f1vhb3bft.css';
import '../../css/o/ogoggcbdt.css';
import '../../css/f/f-05x_lpo.css';
import '../../css/q/q89hai-sn.css';
import '../../css/v/vkq1a_boa.css';
import '../../css/n/n92bcqg6o.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmccj8tio"/><path class="f1vhb3bft"/><path class="ogoggcbdt"/><ellipse class="f-05x_lpo"/><path class="q89hai-sn"/><path class="vkq1a_boa"/><ellipse class="n92bcqg6o"/>`,
		"fallback": "openmoji:rabbit-face",
	});
}

export default Component;
