import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-rlecbga.css';
import '../../css/g/gj8v89bch.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-rlecbga"/><path class="gj8v89bch"/>`,
		"fallback": "energy-icons:video-20-bold",
	});
}

export default Component;
