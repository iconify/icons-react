import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9c5i0b2v.css';
import '../../css/o/o559_525r.css';
import '../../css/c/cn051wbje.css';
import '../../css/v/v4uhdgb-m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k9c5i0b2v"/><path class="o559_525r"/><path class="cn051wbje"/><path class="v4uhdgb-m"/>`,
		"fallback": "ion:thumbs-down",
	});
}

export default Component;
