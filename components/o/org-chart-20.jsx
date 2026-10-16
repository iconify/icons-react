import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k32gpe-6w.css';
import '../../css/u/uq2goxbcr.css';
import '../../css/c/csv0x4boa.css';
import '../../css/v/vny9clrdu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k32gpe-6w"/><path class="uq2goxbcr"/><path class="csv0x4boa"/><path class="vny9clrdu"/>`,
		"fallback": "energy-icons:org-chart-20",
	});
}

export default Component;
