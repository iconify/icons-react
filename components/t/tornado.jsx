import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f68bxi0py.css';
import '../../css/h/h35_mschr.css';
import '../../css/s/s3gwzxt1c.css';
import '../../css/i/i9hh53bve.css';
import '../../css/n/nx4fo20-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f68bxi0py wm-shadow"/><path class="h35_mschr wm-k"/><path class="s3gwzxt1c wm-k"/><path class="i9hh53bve wm-a"/><path class="nx4fo20-h wm-a"/>`,
		"fallback": "withicons-pastel:tornado",
	});
}

export default Component;
