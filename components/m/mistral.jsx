import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfkejab2s.css';
import '../../css/c/c-nkdabpd.css';
import '../../css/i/imx8deb6i.css';
import '../../css/r/rf6rlnhzn.css';
import '../../css/d/dbdiu6u0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfkejab2s"/><path class="c-nkdabpd"/><path class="imx8deb6i"/><path class="rf6rlnhzn"/><path class="dbdiu6u0v"/>`,
		"fallback": "thesvg-color:mistral",
	});
}

export default Component;
