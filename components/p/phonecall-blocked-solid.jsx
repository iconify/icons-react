import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzfrftnrw.css';
import '../../css/c/c11vxbbls.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzfrftnrw"/><path clip-rule="evenodd" class="c11vxbbls"/>`,
		"fallback": "teenyicons:phonecall-blocked-solid",
	});
}

export default Component;
