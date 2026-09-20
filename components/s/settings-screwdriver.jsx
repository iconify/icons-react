import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x2ektx8es.css';
import '../../css/g/gqe2_zrgi.css';
import '../../css/f/fp557ablp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="x2ektx8es"/><path class="gqe2_zrgi"/><path class="fp557ablp"/></g>`,
		"fallback": "streamline-freehand-color:settings-screwdriver",
	});
}

export default Component;
