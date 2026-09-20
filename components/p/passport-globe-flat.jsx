import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kl9kuhubb.css';
import '../../css/x/x-phowbvb.css';
import '../../css/m/mz2-ixb7e.css';
import '../../css/r/r1g-ljbnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kl9kuhubb"/><path clip-rule="evenodd" class="x-phowbvb"/><path clip-rule="evenodd" class="mz2-ixb7e"/><path class="r1g-ljbnb"/></g>`,
		"fallback": "streamline-sharp-color:passport-globe-flat",
	});
}

export default Component;
