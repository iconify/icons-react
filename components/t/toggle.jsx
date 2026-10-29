import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3eha7bzt.css';
import '../../css/r/r3a3c2hpl.css';
import '../../css/w/w5ou4mocx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3eha7bzt wm-k"/><path class="r3a3c2hpl wm-a"/><path class="w5ou4mocx wm-a"/>`,
		"fallback": "withicons-bauhaus:toggle",
	});
}

export default Component;
