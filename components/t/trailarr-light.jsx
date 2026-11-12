import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqyns6bnn.css';
import '../../css/n/nt61mgt6m.css';
import '../../css/o/om4uewb2t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqyns6bnn"/><path class="nt61mgt6m"/><path class="om4uewb2t"/>`,
		"fallback": "selfhst:trailarr-light",
	});
}

export default Component;
