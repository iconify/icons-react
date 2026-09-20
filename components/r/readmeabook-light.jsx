import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/saj1_ob7a.css';
import '../../css/n/n_egtpbci.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="saj1_ob7a"/><path class="n_egtpbci"/>`,
		"fallback": "selfhst:readmeabook-light",
	});
}

export default Component;
