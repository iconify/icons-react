import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1iew.css';
import '../../css/x/xr5osn.css';
import '../../css/f/f6m63a.css';
import '../../css/y/y4wbml.css';
import '../../css/f/f2fjgc.css';
import '../../css/s/so-from-62.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw1iew xr5osn"/><path class="f6m63a iw1iew y4wbml"/><path class="f2fjgc iw1iew y4wbml"/>`,
		"fallback": "line-md:phone-remove-filled",
	});
}

export default Component;
