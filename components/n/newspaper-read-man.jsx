import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vlyhtbbyo.css';
import '../../css/w/wyerq1-7y.css';
import '../../css/x/xffcndilr.css';
import '../../css/u/ur14wvsfk.css';
import '../../css/r/rvux61dlp.css';
import '../../css/o/omsnwu1iq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="vlyhtbbyo"/><path class="wyerq1-7y"/><path class="xffcndilr"/><path class="ur14wvsfk"/><path class="rvux61dlp"/><path class="omsnwu1iq"/></g>`,
		"fallback": "streamline-freehand-color:newspaper-read-man",
	});
}

export default Component;
