import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3z_smx1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3z_smx1x"/>`,
		"fallback": "streamline-ultimate:vlc-logo",
	});
}

export default Component;
