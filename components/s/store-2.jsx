import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/s/sk0wnfbnl.css';
import '../../css/n/nm1r7abzv.css';
import '../../css/z/ztvw850qf.css';
import '../../css/b/bjd1nd6un.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="sk0wnfbnl"/><path class="nm1r7abzv"/><path class="ztvw850qf"/><path class="bjd1nd6un"/></g>`,
		"fallback": "streamline-sharp-color:store-2",
	});
}

export default Component;
