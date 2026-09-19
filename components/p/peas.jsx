import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g1-1k5pbw.css';
import '../../css/s/skgu0jb8u.css';
import '../../css/h/hl_zaybjk.css';
import '../../css/l/lg5q9dd9r.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGT9VwgbtK"><g class="ft5dv1b6b"><path class="g1-1k5pbw"/><path class="skgu0jb8u"/><circle class="hl_zaybjk"/><circle class="lg5q9dd9r"/></g></mask></defs><path mask="url(#SVGT9VwgbtK)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:peas",
	});
}

export default Component;
