import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vz3zabchs.css';
import '../../css/p/pnow03huu.css';
import '../../css/c/cn5kjj8bc.css';
import '../../css/s/sdcfvbbsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vz3zabchs"/><path class="pnow03huu"/><path clip-rule="evenodd" class="cn5kjj8bc"/><path class="sdcfvbbsi"/></g>`,
		"fallback": "streamline-sharp-color:justice-scale-2-flat",
	});
}

export default Component;
