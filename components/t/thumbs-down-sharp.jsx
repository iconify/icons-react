import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbd9vjcah.css';
import '../../css/o/o559_525r.css';
import '../../css/c/cn051wbje.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbd9vjcah"/><path class="o559_525r"/><path class="cn051wbje"/>`,
		"fallback": "ion:thumbs-down-sharp",
	});
}

export default Component;
