import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3jqfmhas.css';
import '../../css/h/hpn385b9j.css';
import '../../css/w/wyp81zbej.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3jqfmhas"/><path class="hpn385b9j"/><path class="wyp81zbej"/>`,
		"fallback": "energy-icons:running-20-bold",
	});
}

export default Component;
