import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ff_zigbzi.css';
import '../../css/r/r46vxebie.css';
import '../../css/e/et996hggo.css';
import '../../css/o/os8b0uf2k.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ff_zigbzi"/><circle class="r46vxebie"/><path class="et996hggo"/><path class="os8b0uf2k"/>`,
		"fallback": "devicon-plain:pytorch-wordmark",
	});
}

export default Component;
