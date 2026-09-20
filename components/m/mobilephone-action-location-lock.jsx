import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/s4mc_pwhm.css';
import '../../css/f/f__d2e_ze.css';
import '../../css/u/urwd-umbj.css';
import '../../css/v/vrue9i-7y.css';
import '../../css/p/pcjed1bar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="s4mc_pwhm"/><path class="f__d2e_ze"/><path class="urwd-umbj"/><path class="vrue9i-7y"/><path class="pcjed1bar"/></g>`,
		"fallback": "streamline-freehand-color:mobilephone-action-location-lock",
	});
}

export default Component;
