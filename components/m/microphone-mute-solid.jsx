import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqa3tkb1n.css';
import '../../css/h/hw5sfdxzd.css';
import '../../css/o/od3zj2duq.css';
import '../../css/m/mk8ww2w7h.css';
import '../../css/y/y9fwjubcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="sqa3tkb1n"><path class="hw5sfdxzd"/><path class="od3zj2duq"/><path class="mk8ww2w7h"/><path class="y9fwjubcs"/></g>`,
		"fallback": "iconoir:microphone-mute-solid",
	});
}

export default Component;
