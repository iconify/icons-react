import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6coe0beu.css';
import '../../css/l/lboc1x51a.css';
import '../../css/c/clfv5tb8j.css';
import '../../css/a/a-5l6ub9n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r6coe0beu"/><path class="lboc1x51a"/><path class="clfv5tb8j"/><path class="a-5l6ub9n"/>`,
		"fallback": "selfhst:sendgrid-light",
	});
}

export default Component;
