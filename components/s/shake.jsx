import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/p/pjw4h4wuo.css';
import '../../css/r/rt1h_-mxc.css';
import '../../css/h/hsxkkdbde.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGAVOXMIBC"><g class="ufeehvblu"><path class="pjw4h4wuo"/><path class="rt1h_-mxc"/><path class="hsxkkdbde"/></g></mask></defs><path mask="url(#SVGAVOXMIBC)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:shake",
	});
}

export default Component;
