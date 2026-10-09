import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt2mfkbnd.css';
import '../../css/d/d_ox8aczn.css';
import '../../css/k/k7qteslrh.css';
import '../../css/r/r3am92kyi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kt2mfkbnd"/><path class="d_ox8aczn"/><path class="k7qteslrh"/><path class="r3am92kyi"/>`,
		"fallback": "energy-icons:liquid-air-20",
	});
}

export default Component;
