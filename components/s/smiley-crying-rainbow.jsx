import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o-y_v-bos.css';
import '../../css/n/nb88mtb2q.css';
import '../../css/z/zz8vjn9xx.css';
import '../../css/x/xog3t_bph.css';
import '../../css/i/ism4j27fn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o-y_v-bos"/><path class="nb88mtb2q"/><path class="zz8vjn9xx"/><path class="xog3t_bph"/><path class="ism4j27fn"/></g>`,
		"fallback": "streamline-freehand-color:smiley-crying-rainbow",
	});
}

export default Component;
