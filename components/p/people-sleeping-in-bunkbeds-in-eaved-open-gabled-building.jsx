import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t769otr5u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t769otr5u"/>`,
		"fallback": "pinhead:people-sleeping-in-bunkbeds-in-eaved-open-gabled-building",
	});
}

export default Component;
