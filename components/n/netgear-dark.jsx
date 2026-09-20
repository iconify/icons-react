import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb87fub2m.css';
import '../../css/i/igrgcsw-i.css';
import '../../css/a/ak8i1tnjp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nb87fub2m"/><path class="igrgcsw-i"/><path class="ak8i1tnjp"/>`,
		"fallback": "selfhst:netgear-dark",
	});
}

export default Component;
