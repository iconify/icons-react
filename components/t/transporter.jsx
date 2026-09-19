import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/r/r9v9olbvu.css';
import '../../css/q/qfqew4w1l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG5viI2z1N"><g class="v3_i3wktz"><path class="r9v9olbvu"/><path class="qfqew4w1l"/></g></mask></defs><path mask="url(#SVG5viI2z1N)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:transporter",
	});
}

export default Component;
